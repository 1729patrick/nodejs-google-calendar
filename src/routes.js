import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import LoginController from './app/controllers/LoginController';
import EventController from './app/controllers/EventController';

const router = Router();

router.get('/login/:userID', LoginController.store);
router.get('/sessions', SessionController.index);

router.use(authMiddleware);

router.post('/events', EventController.store);
router.get('/events', EventController.index);
router.put('/events/:eventId', EventController.update);
router.delete('/events/:eventId', EventController.delele);

export default router;
