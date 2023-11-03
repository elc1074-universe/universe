import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import PersonalityRetrievalDTO from '../entities/dto/personality/PersonalityRetrievalDTO';
import StatementRetrievalDTO from '../entities/dto/statement/StatementRetrievalDTO';
import PersonalityService from '../services/PersonalityService';
import ApiResponse from '../entities/api/ApiResponse';

const personalityRouter: Router = Router();

personalityRouter.get('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const rawPersonalities = await PersonalityService.findAll();

    const mappedPersonalities = rawPersonalities.map(personality => new PersonalityRetrievalDTO(personality));

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<PersonalityRetrievalDTO[]>(statusCode, mappedPersonalities);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

personalityRouter.get('/:letter', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { letter } = request.params;

    const rawPersonality = await PersonalityService.findByLetter(letter);

    const mappedPersonality = new PersonalityRetrievalDTO(rawPersonality);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<PersonalityRetrievalDTO>(statusCode, mappedPersonality);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

personalityRouter.get('/:letter/statements', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { letter } = request.params;

    const rawStatements = await PersonalityService.findStatementsByPersonalityLetter(letter);

    const mappedStatements = await Promise.all(rawStatements.map(rawStatement => StatementRetrievalDTO.create(rawStatement)));

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<StatementRetrievalDTO[]>(statusCode, mappedStatements);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default personalityRouter;
