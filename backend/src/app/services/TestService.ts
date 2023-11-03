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
import PersonalityService from './PersonalityService';

const NUMBER_OF_STATEMENTS = 42;

const findByUserCode = async (userCode: string): Promise<Test> => {
  const test = await TestRepository.findByUserCode(userCode);

  if (!test) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Jogo não encontrado',
      `Não foi encontrado nenhum jogo com o código de usuário '${userCode}'`
    );
  }

  return test;
};

const create = async (testCreationDTO: TestCreationDTO): Promise<Test> => {
  testCreationDTO.validate();

  const test = new Test();
  test.user = await UserService.save(new UserSavingDTO(testCreationDTO.username, testCreationDTO.email));

  return await TestRepository.save(test);
};

const isCompleted = async (userCode: string): Promise<boolean> => {
  const statements = await TestStatementService.findByUserCode(userCode);

  if (!statements || (statements.length >= 0 && statements.length < NUMBER_OF_STATEMENTS)) return false;

  return statements.every(statement => statement.selectedOption !== null);
};

const isPersonalityCompleted = async (userCode: string, personalityId: number): Promise<boolean> => {
  const numberOfCompletedStatements = await TestStatementService.findNumberOfCompletedStatementsByUserCodeAndPersonalityId(userCode, personalityId);

  return numberOfCompletedStatements == PersonalityService.NUMBER_OF_STATEMENTS_BY_PERSONALITY;
};

const findPersonalityLastCompletedStatementId = (userCode: string, personalityId: number): Promise<number> => {
  return TestStatementService.findCurrentStatementIdByUserCodeAndPersonalityId(userCode, personalityId);
};

const getResult = async (userCode: string): Promise<Result | null> => {
  try {
    return await ResultService.findByUserCode(userCode);
  } catch (error) {
    return ResultService.computeAndSave(userCode);
  }
};

export default {
  findByUserCode,
  create,
  isCompleted,
  isPersonalityCompleted,
  findPersonalityLastCompletedStatementId,
  getResult,
  NUMBER_OF_STATEMENTS
};
