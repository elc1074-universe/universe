import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import PersonalityService from '../services/PersonalityService';
import Personality from '../entities/database/Personality';
import PersonalityRetrievalDTO from '../entities/dto/PersonalityRetrievalDTO';
import ApiResponse from '../entities/api/ApiResponse';

const personalityRouter: Router = Router();

personalityRouter.get('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const rawPersonalities: Personality[] = await PersonalityService.findAllPersonalities();

    const mappedPersonalities: PersonalityRetrievalDTO[] = rawPersonalities.map(personality => new PersonalityRetrievalDTO(personality));

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<PersonalityRetrievalDTO[]> = new ApiResponse<PersonalityRetrievalDTO[]>(statusCode, mappedPersonalities);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

personalityRouter.get('/:letter', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { letter } = request.params;

    const rawPersonality: Personality = await PersonalityService.findPersonalityByLetter(letter);

    const mappedPersonality: PersonalityRetrievalDTO = new PersonalityRetrievalDTO(rawPersonality);

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<PersonalityRetrievalDTO> = new ApiResponse<PersonalityRetrievalDTO>(statusCode, mappedPersonality);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default personalityRouter;
