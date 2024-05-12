import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme } from '@material-ui/core/styles';
import GiftList from './GiftList';
import { Button } from '@material-ui/core';

interface GiftModalProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
      position: 'absolute',
      width: '70vw',
      height: '70vh',
      backgroundColor: '#bababa',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }));

const GiftsModal: React.FC<GiftModalProps> = ({open, onClose}) => {
    const classes = useStyles();
    return (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
            <GiftList/>
            <Button variant="contained" onClick={onClose}>Назад</Button>
        </div>
      </Modal>

    );
};

export default GiftsModal;