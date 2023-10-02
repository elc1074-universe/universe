// statement.controller.js
import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import StatementService from '../services/StatementService';
import Statement from '../entities/database/Statement';
import StatementRetrievalDTO from '../entities/dto/StatementRetrievalDTO';
import ApiResponse from '../entities/api/ApiResponse';

const statementRouter: Router = Router();

statementRouter.get('/:id', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawStatement: Statement = await StatementService.findStatementById(id);

    const mappedStatement: StatementRetrievalDTO = new StatementRetrievalDTO(rawStatement);

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<StatementRetrievalDTO> = new ApiResponse<StatementRetrievalDTO>(statusCode, mappedStatement);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default statementRouter;
