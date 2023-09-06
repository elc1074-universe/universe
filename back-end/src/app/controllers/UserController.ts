import { Request, Response, Router } from 'express';

import UserRepository from '../repositories/UserRepository';

const userRouter: Router = Router();

userRouter.get('/', async (request: Request, response: Response): Promise<Response> => {
  const users = await UserRepository.getUsers();
  return response.status(200).json(users);
});

export default userRouter;
