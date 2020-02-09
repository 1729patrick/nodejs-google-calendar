import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import LoginController from './app/controllers/LoginController';
import EventController from './app/controllers/EventController';

const router = Router();

router.get('/api/calendar/login/:userID', LoginController.store);
router.get('/api/calendar/sessions', SessionController.index);

router.use(authMiddleware);

router.post('/api/calendar/events', EventController.store);
router.get('/api/calendar/events', EventController.index);
router.put('/api/calendar/events/:eventId', EventController.update);
router.delete('/api/calendar/events/:eventId', EventController.delele);

export default router;
