import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import TestCreationDTO from '../entities/dto/test/TestCreationDTO';
import TestRetrievalDTO from '../entities/dto/test/TestRetrievalDTO';
import TestService from '../services/TestService';
import TestStatementSavingDTO from '../entities/dto/test/TestStatementSavingDTO';
import TestStatementService from '../services/TestStatementService';
import PersonalityRetrievalDTO from '../entities/dto/test/PersonalityRetrievalDTO';
import PersonalityService from '../services/PersonalityService';
import ResultRetrievalDTO from '../entities/dto/test/ResultRetrievalDTO';
import ApiResponse from '../entities/api/ApiResponse';

const testRouter: Router = Router();

testRouter.get('/:userCode', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { userCode } = request.params;

    const rawTest = await TestService.findByUserCode(userCode);

    const mappedTest = await TestRetrievalDTO.create(rawTest);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<TestRetrievalDTO>(statusCode, mappedTest);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.get('/:userCode/result', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { userCode } = request.params;

    const rawResult = await TestService.getResult(userCode);

    const mappedResult = await ResultRetrievalDTO.create(rawResult);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<ResultRetrievalDTO>(statusCode, mappedResult);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.get('/:userCode/personalities', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { userCode } = request.params;

    const rawPersonalities = await PersonalityService.findAll();

    const mappedPersonalities = await Promise.all(
      rawPersonalities.map(async (rawPersonality) => await PersonalityRetrievalDTO.create(rawPersonality, userCode))
    );

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<PersonalityRetrievalDTO[]>(statusCode, mappedPersonalities);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.get('/:userCode/personalities/:personalityLetter', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { userCode, personalityLetter } = request.params;

    const rawPersonality = await PersonalityService.findByLetter(personalityLetter);

    const mappedPersonality = await PersonalityRetrievalDTO.create(rawPersonality, userCode);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<PersonalityRetrievalDTO>(statusCode, mappedPersonality);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.delete('/:userCode/personalities/:personalityLetter', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { userCode, personalityLetter } = request.params;

    TestStatementService.deleteByUserCodeAndPersonalityLetter(userCode, personalityLetter);

    response.status(StatusCodes.NO_CONTENT).send();
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.post('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const testCreationDTO = new TestCreationDTO(request.body['username'], request.body['email']);

    const rawTest = await TestService.create(testCreationDTO);

    const mappedTest = await TestRetrievalDTO.create(rawTest);

    const statusCode = StatusCodes.CREATED;

    const apiResponse = new ApiResponse<TestRetrievalDTO>(statusCode, mappedTest);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.patch('/:userCode/statements', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const testStatementSavingDTO = new TestStatementSavingDTO(
      request.params['userCode'],
      request.body['statementId'],
      request.body['selectedOptionId']
    );

    const testStatement = await TestStatementService.save(testStatementSavingDTO);

    const test = await TestRetrievalDTO.create(testStatement.test);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<TestRetrievalDTO>(statusCode, test);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default testRouter;
