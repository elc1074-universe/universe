import { Router, Request, Response, RequestHandler } from 'express';

import UserRepository from '../repositories/UserRepository';
import User from '../entities/database/User';
import UserRetrievalDTO from '../entities/dto/UserRetrievalDTO';
import UserSavingDTO from '../entities/dto/UserSavingDTO';
import ApiResponse from '../entities/api/ApiResponse';

const userRouter: Router = Router();

userRouter.get('/', (async (request: Request, response: Response): Promise<void> => {
  const rawUsers: User[] = await UserRepository.findAllUsers();

  const mappedUsers: UserRetrievalDTO[] = rawUsers.map(user => new UserRetrievalDTO(user));

  const status: number = 200;

  const apiResponse: ApiResponse<UserRetrievalDTO[]> = new ApiResponse<UserRetrievalDTO[]>(status, mappedUsers);

  response.status(status).json(apiResponse);
}) as RequestHandler);

userRouter.get('/:username', (async (request: Request, response: Response): Promise<void> => {
  const { username } = request.params;

  const rawUser: User = await UserRepository.findUserByUsername(username);

  const mappedUser: UserRetrievalDTO = new UserRetrievalDTO(rawUser);

  const status: number = 200;

  const apiResponse: ApiResponse<UserRetrievalDTO> = new ApiResponse<UserRetrievalDTO>(status, mappedUser);

  response.status(status).json(apiResponse);
}) as RequestHandler);

userRouter.post('/', (async (request: Request, response: Response): Promise<void> => {
  const userSavingDTO: UserSavingDTO = request.body;

  const rawUser: User = await UserRepository.saveUser(userSavingDTO);

  const mappedUser: UserRetrievalDTO = new UserRetrievalDTO(rawUser);

  const status: number = 201;

  const apiResponse: ApiResponse<UserRetrievalDTO> = new ApiResponse<UserRetrievalDTO>(status, mappedUser);

  response.status(status).json(apiResponse);
}) as RequestHandler);

export default userRouter;
