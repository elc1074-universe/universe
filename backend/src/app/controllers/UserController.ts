import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import UserRetrievalDTO from '../entities/dto/user/UserRetrievalDTO';
import UserService from '../services/UserService';
import ApiResponse from '../entities/api/ApiResponse';

const userRouter: Router = Router();

userRouter.get('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const rawUsers = await UserService.findAllUsers();

    const mappedUsers = rawUsers.map(user => new UserRetrievalDTO(user));

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<UserRetrievalDTO[]>(statusCode, mappedUsers);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

userRouter.get('/:code', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { code } = request.params;

    const rawUser = await UserService.findUserByCode(code);

    const mappedUser = new UserRetrievalDTO(rawUser);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<UserRetrievalDTO>(statusCode, mappedUser);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default userRouter;
