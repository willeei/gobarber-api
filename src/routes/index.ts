import { Router } from 'express';

import authRouter from './auth.routes';
import usersRouter from './users.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/users', usersRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
