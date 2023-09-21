import { Router } from 'express';

import userRouter from '../controllers/UserController';

const routes = Router();

routes.use('/api/users', userRouter);

export default routes;
