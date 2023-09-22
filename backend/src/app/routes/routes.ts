import { Router } from 'express';

import userRouter from '../controllers/UserController';
import errorHandler from '../controllers/ErrorHandler';

const routes = Router();

routes.use('/api/users', userRouter);
routes.use(errorHandler)

export default routes;
