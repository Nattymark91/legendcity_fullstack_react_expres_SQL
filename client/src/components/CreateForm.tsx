import React, { useEffect, useState } from 'react';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';
import { createMail} from '../store/action-creator/mailsAction';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Button from '@material-ui/core/Button';
import GiftsModal from './GiftsModal';
import { Modal, Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    height: 100,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const CreateForm: React.FC = () => {
    const {count} = useTypedSelector(state => state.mail);
    const {currentGift} = useTypedSelector(state => state.gift);
    const [giftsVisible, setGiftsVisible] = useState(false);
    const [giftQuantity, setGiftQuantity] = useState(1);
    const {setMailCount, fetchGifts} = useActions();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetchGifts()
    }, [])

    const CreateSchema = Yup.object().shape({
      name: Yup.string()
        .required('Поле обязательно к заполнению'),
        quantity: Yup.number()
        .min(1, 'Подарков не может быть меньше одного')
        .max(giftQuantity, 'Подарков не может быть больше оставшихся')
        .required('Поле обязательно к заполнению'),
        days: Yup.number()
        .min(2, 'Не допустимое значение')
        .required('Поле обязательно к заполнению'),
        description: Yup.string()
        .max(500, 'Слишком длинное описание')
        .required('Поле обязательно к заполнению'),
        carts: Yup.string()
        .matches(/^[0-9^\d,]+$/, "Только числа и запятые")
        .max(5000, 'Превышено максимально допустимое значение поля')
        .required('Поле обязательно к заполнению'),
        giftId: Yup.number()
        .required('Выберете подарок'),
    });

    return (
        <Formik initialValues={
           { name: '',
            quantity: '',
            days: '',
            description: '',
            carts: '',
            giftId: '',}
          }
        validationSchema={CreateSchema}
        onSubmit={(values) => {
            createMail(values)
            .then(() => {setMailCount(count + 1)})
            .then(handleClose)
        }}>
             {({ errors, touched, setFieldValue }) => (
           <Form id="create" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20}}>

           <label htmlFor="name">Название рассылки</label>
           <div><Field id="name" name="name" placeholder="Название рассылки" />
           {errors.name && touched.name ? (
          <div style={{color: 'red'}}>{errors.name}</div>
           ) : null}</div>

           <div>{currentGift.id ? <p>Выбран подарок № {currentGift.id}</p> : <p>Подарок не выбран</p>}
            {errors.giftId ? (
              <div style={{color: 'red'}}>{errors.giftId}</div>
            ) : null}
            </div>
           <Button onClick={() => setGiftsVisible(true)}>Выбрать подарок</Button>

           <label htmlFor="quantity">Кол-во подарков</label>
           <div><Field id="quantity" name="quantity" type="number" placeholder="Кол-во подарков" />
           {errors.quantity && touched.quantity ? (
             <div style={{color: 'red'}}>{errors.quantity}</div>
           ) : null}</div>

           <label htmlFor="days">Кол-во дней на получение подарка</label>
           <div><Field id="days" name="days" type="number" placeholder="Кол-во дней на получение подарка" />
           {errors.days && touched.days ? (
             <div style={{color: 'red'}}>{errors.days}</div>
           ) : null}</div>

           <label htmlFor="description">Описание акции</label>
           <div><Field id="description" name="description" placeholder="Описание акции" />
           {errors.description && touched.description ? (
             <div style={{color: 'red'}}>{errors.description}</div>
           ) : null}</div>

           <label htmlFor="carts">Номера карт</label>
           <div><Field id="carts" name="carts" placeholder="Номера карт" />
           {errors.carts && touched.carts ? (
             <div style={{color: 'red'}}>{errors.carts}</div>
           ) : null}</div>

           <Button variant="contained" onClick={handleOpen} color="primary">Создать</Button>
           <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
                  <div className={classes.paper}>
                  <h2>Создать акцию</h2>
                  <Button type="submit" form="create">Да</Button>
                  <Button variant="contained" onClick={handleClose} color="secondary">Нет</Button>
              </div>
            </Modal>
            <GiftsModal open={giftsVisible} onClose={() => {setGiftsVisible(false); setFieldValue("giftId", currentGift.id); setGiftQuantity(currentGift.quantity)}}/> 
         </Form>
         
         )}
         
        </Formik>
    );
};

export default CreateForm;