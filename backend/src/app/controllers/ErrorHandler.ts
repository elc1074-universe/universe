import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ApiResponse from '../entities/api/ApiResponse';
import ApiError from '../entities/api/ApiError';

const errorHandler = (error: unknown, request: Request, response: Response, next: NextFunction): void => {
  let httpStatusCode: StatusCodes;
  let apiResponse: ApiResponse<any>;

  switch (error.constructor) {
    case ApiError: {
      const castedError: ApiError = error as ApiError;
      httpStatusCode = castedError.httpStatus.code || StatusCodes.INTERNAL_SERVER_ERROR;
      const apiError: ApiError = new ApiError(httpStatusCode, castedError.message, castedError.debugMessage, castedError.subErrors);
      apiResponse = new ApiResponse(httpStatusCode, null, apiError);
      break;
    }
    default: {
      const castedError: Error = error as Error;
      httpStatusCode = StatusCodes.INTERNAL_SERVER_ERROR;
      const apiError: ApiError = new ApiError(httpStatusCode, castedError.message);
      apiResponse = new ApiResponse(httpStatusCode, null, apiError);
      break;
    }
  }

  response.status(httpStatusCode).json(apiResponse);
};

export default errorHandler;
