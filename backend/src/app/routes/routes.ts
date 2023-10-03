import { Router } from 'express';

import userRouter from '../controllers/UserController';
import errorHandler from '../controllers/ErrorHandler';
import statementRouter from '../controllers/StatementController';
import personalityRouter from '../controllers/PersonalityController';
import optionRouter from '../controllers/OptionController';

const routes = Router();

routes.use('/api/users', userRouter);
routes.use('/api/statements', statementRouter);
routes.use('/api/personalities', personalityRouter);
routes.use('/api/options', optionRouter);
routes.use(errorHandler)

export default routes;
