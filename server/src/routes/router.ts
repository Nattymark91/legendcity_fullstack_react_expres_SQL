import express from 'express';
import giftController from '../controllers/giftsController';
import mailsController from '../controllers/mailsController';

const router = express.Router();

router.post('/gifts', giftController.create);
router.get('/gifts', giftController.getAll);
router.get('/gifts/:id', giftController.getOne);
router.delete('/gifts/:id', giftController.destroy);

router.post('/mails', mailsController.create);
router.get('/mails', mailsController.getAll);
router.get('/mails/:id', mailsController.getOne);
router.delete('/mails/:id', mailsController.destroy);
router.put('/mails/:id', mailsController.update);

export = router;