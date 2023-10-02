import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import PersonalityService from '../services/PersonalityService';
import Personality from '../entities/database/Personality';
import PersonalityRetrievalDTO from '../entities/dto/PersonalityRetrievalDTO';
import ApiResponse from '../entities/api/ApiResponse';

const personalityRouter: Router = Router();

personalityRouter.get('/:id', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawPersonality: Personality = await PersonalityService.findPersonalityById(id);

    const mappedPersonality: PersonalityRetrievalDTO = new PersonalityRetrievalDTO(rawPersonality);

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<PersonalityRetrievalDTO> = new ApiResponse<PersonalityRetrievalDTO>(statusCode, mappedPersonality);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default personalityRouter;
