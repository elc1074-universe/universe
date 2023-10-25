import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import OptionRetrievalDTO from '../entities/dto/option/OptionRetrievalDTO';
import OptionService from '../services/OptionService';
import ApiResponse from '../entities/api/ApiResponse';

const optionRouter: Router = Router();

optionRouter.get('/:id', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawOption = await OptionService.findOptionById(id);

    const mappedOption = new OptionRetrievalDTO(rawOption);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<OptionRetrievalDTO>(statusCode, mappedOption);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

optionRouter.get('/statement/:id', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawOptions = await OptionService.findOptionsByStatementId(id);

    const mappedOptions = rawOptions.map((option) => new OptionRetrievalDTO(option));

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<OptionRetrievalDTO[]>(statusCode, mappedOptions);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default optionRouter;
