import TestStatement from '../entities/database/TestStatement';
import TestStatementSavingDTO from '../entities/dto/test/TestStatementSavingDTO';
import TestStatementRepository from '../repositories/TestStatementRepository';
import TestService from './TestService';
import StatementService from './StatementService';
import OptionService from './OptionService';

const findByUserCode = (userCode: string): Promise<TestStatement[]> => {
  return TestStatementRepository.findByUserCode(userCode);
};

const findByUserCodeAndStatementId = (userCode: string, statementId: number): Promise<TestStatement | null> => {
  return TestStatementRepository.findByUserCodeAndStatementId(userCode, statementId);
};

const findCurrentStatementIdByUserCodeAndPersonalityId = (userCode: string, personalityId: number): Promise<number> => {
  return TestStatementRepository.findCurrentStatementIdByUserCodeAndPersonalityId(userCode, personalityId);
};

const findNumberOfCompletedStatementsByUserCodeAndPersonalityId = (userCode: string, personalityId: number): Promise<number> => {
  return TestStatementRepository.findNumberOfCompletedStatementsByUserCodeAndPersonalityId(userCode, personalityId);
};

const save = async (statementSavingDTO: TestStatementSavingDTO): Promise<TestStatement> => {
  const testStatement = new TestStatement(
    await TestService.findByUserCode(statementSavingDTO.userCode),
    await StatementService.findById(statementSavingDTO.statementId),
    await OptionService.findById(statementSavingDTO.selectedOptionId)
  );

  return await TestStatementRepository.save(testStatement);
};

export default {
  findByUserCode,
  findByUserCodeAndStatementId,
  findCurrentStatementIdByUserCodeAndPersonalityId,
  findNumberOfCompletedStatementsByUserCodeAndPersonalityId,
  save
};
