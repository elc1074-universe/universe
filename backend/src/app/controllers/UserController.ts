import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import UserService from '../services/UserService';
import User from '../entities/database/User';
import UserRetrievalDTO from '../entities/dto/UserRetrievalDTO';
import UserSavingDTO from '../entities/dto/UserSavingDTO';
import ApiResponse from '../entities/api/ApiResponse';

const userRouter: Router = Router();

userRouter.get('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const rawUsers: User[] = await UserService.findAllUsers();

    const mappedUsers: UserRetrievalDTO[] = rawUsers.map(user => new UserRetrievalDTO(user));

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<UserRetrievalDTO[]> = new ApiResponse<UserRetrievalDTO[]>(statusCode, mappedUsers);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

userRouter.get('/:username', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {

  try {
    const { username } = request.params;

    const rawUser: User = await UserService.findUserByUsername(username);

    const mappedUser: UserRetrievalDTO = new UserRetrievalDTO(rawUser);

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<UserRetrievalDTO> = new ApiResponse<UserRetrievalDTO>(statusCode, mappedUser);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

userRouter.post('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const userSavingDTO: UserSavingDTO = new UserSavingDTO(request.body['username'], request.body['email']);

    const rawUser: User = await UserService.saveUser(userSavingDTO);

    const mappedUser: UserRetrievalDTO = new UserRetrievalDTO(rawUser);

    const statusCode: number = StatusCodes.CREATED;

    const apiResponse: ApiResponse<UserRetrievalDTO> = new ApiResponse<UserRetrievalDTO>(statusCode, mappedUser);

    const location: string = new URL(`${request.protocol}://${request.get('host')}${request.originalUrl}/${rawUser.username}`).toString();

    response.status(statusCode).location(location).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default userRouter;
