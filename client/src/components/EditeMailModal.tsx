import React, {useState}  from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme } from '@material-ui/core/styles';
import EditeForm from './EditeForm';

interface EditeMailModalProps {
  open: boolean;
  onClose: () => void;
  mail: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }));

const EditeMailModal: React.FC<EditeMailModalProps> = ({open, onClose, mail}) => {
    const classes = useStyles();

    return (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2>Редактирование рассылки</h2>
          <EditeForm key={mail.id} mail={mail}/>
        </div>
      </Modal>

    );
};

export default EditeMailModal;