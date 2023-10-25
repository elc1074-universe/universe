import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import StatementRetrievalDTO from '../entities/dto/statement/StatementRetrievalDTO';
import StatementService from '../services/StatementService';
import ApiResponse from '../entities/api/ApiResponse';

const statementRouter: Router = Router();

statementRouter.get('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const rawStatements = await StatementService.findAllStatements();

    const mappedStatements = await Promise.all(rawStatements.map(statement => StatementRetrievalDTO.create(statement)));

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<StatementRetrievalDTO[]>(statusCode, mappedStatements);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

statementRouter.get('/:id', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawStatement = await StatementService.findStatementById(id);

    const mappedStatement = await StatementRetrievalDTO.create(rawStatement);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<StatementRetrievalDTO>(statusCode, mappedStatement);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default statementRouter;
