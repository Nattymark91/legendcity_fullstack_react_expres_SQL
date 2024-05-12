import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CreateForm from './CreateForm';

interface CreateMailModalProps {
  open: boolean;
  onClose: () => void;
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
      overflow: 'auto'
    },
  }));

const CreateMailModal: React.FC<CreateMailModalProps> = ({open, onClose}) => {
    const classes = useStyles();

    return (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Создать рассылку</h2>
          <CreateForm/>
        </div>
      </Modal>

    );
};

export default CreateMailModal;