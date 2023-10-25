import { StatusCodes } from 'http-status-codes';

import Test from '../entities/database/Test';
import Result from '../entities/database/Result';
import TestCreationDTO from '../entities/dto/test/TestCreationDTO';
import UserSavingDTO from '../entities/dto/user/UserSavingDTO';
import TestRepository from '../repositories/TestRepository';
import UserService from './UserService';
import TestStatementService from './TestStatementService';
import ResultService from './ResultService';
import ApiError from '../entities/api/ApiError';

const NUMBER_OF_STATEMENTS = 42;

const findTestByUserCode = async (userCode: string): Promise<Test> => {
  const test = await TestRepository.findTestByUserCode(userCode);

  if (!test) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Jogo não encontrado',
      `Não foi encontrado nenhum jogo com o código de usuário '${userCode}'`
    );
  }

  return test;
};

const createTest = async (testCreationDTO: TestCreationDTO): Promise<Test> => {
  testCreationDTO.validate();

  const test = new Test();
  test.user = await UserService.saveUser(new UserSavingDTO(testCreationDTO.username, testCreationDTO.email));

  return await TestRepository.saveTest(test);
};

const isTestCompleted = async (userCode: string): Promise<boolean> => {
  const statements = await TestStatementService.findTestStatementsByUserCode(userCode);

  if (!statements || (statements.length >= 0 && statements.length < NUMBER_OF_STATEMENTS)) return false;

  return statements.every(statement => statement.selectedOption !== null);
};

const getResult = async (userCode: string): Promise<Result | null> => {
  try {
    return await ResultService.findResultByUserCode(userCode);
  } catch (error) {
    return ResultService.computeAndSaveResult(userCode);
  }
};

export default {
  findTestByUserCode,
  createTest,
  isTestCompleted,
  getResult
};
