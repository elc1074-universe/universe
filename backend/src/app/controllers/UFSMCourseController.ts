import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import UFSMCourseService from '../services/UFSMCourseService';
import UFSMCourseRetrievalDTO from '../entities/dto/test/UFSMCourseRetrievalDTO';
import ApiResponse from '../entities/api/ApiResponse';

const ufsmCourseRouter: Router = Router();

ufsmCourseRouter.get('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const rawUFSMCourses = await UFSMCourseService.findAll();

    const mappedUFSMCourses = rawUFSMCourses.map(ufsmCourse => new UFSMCourseRetrievalDTO(ufsmCourse));

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<UFSMCourseRetrievalDTO[]>(statusCode, mappedUFSMCourses);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

ufsmCourseRouter.get('/:id', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawUFSMCourse = await UFSMCourseService.findById(id);

    const mappedUFSMCourse = new UFSMCourseRetrievalDTO(rawUFSMCourse);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<UFSMCourseRetrievalDTO>(statusCode, mappedUFSMCourse);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default ufsmCourseRouter;
