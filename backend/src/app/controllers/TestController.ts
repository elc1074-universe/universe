import { Router, Request, Response, RequestHandler, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import TestCreationDTO from '../entities/dto/test/TestCreationDTO';
import TestRetrievalDTO from '../entities/dto/test/TestRetrievalDTO';
import TestService from '../services/TestService';
import TestStatementSavingDTO from '../entities/dto/test/TestStatementSavingDTO';
import TestStatementService from '../services/TestStatementService';
import ResultRetrievalDTO from '../entities/dto/test/ResultRetrievalDTO';
import ApiResponse from '../entities/api/ApiResponse';

const testRouter: Router = Router();

testRouter.get('/:userCode', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { userCode } = request.params;

    const rawTest = await TestService.findTestByUserCode(userCode);

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

    const mappedResult = new ResultRetrievalDTO(rawResult);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<ResultRetrievalDTO>(statusCode, mappedResult);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

testRouter.post('/', (async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const testCreationDTO = new TestCreationDTO(request.body['username'], request.body['email']);

    const rawTest = await TestService.createTest(testCreationDTO);

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

    const testStatement = await TestStatementService.saveTestStatement(testStatementSavingDTO);

    const test = await TestRetrievalDTO.create(testStatement.test);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<TestRetrievalDTO>(statusCode, test);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default testRouter;
