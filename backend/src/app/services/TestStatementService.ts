import TestStatement from '../entities/database/TestStatement';
import TestStatementSavingDTO from '../entities/dto/test/TestStatementSavingDTO';
import TestStatementRepository from '../repositories/TestStatementRepository';
import TestService from './TestService';
import StatementService from './StatementService';
import OptionService from './OptionService';

const findTestStatementsByUserCode = (userCode: string): Promise<TestStatement[]> => {
  return TestStatementRepository.findTestStatementsByUserCode(userCode);
};

const findTestStatementByUserCodeAndStatementId = (userCode: string, statementId: number): Promise<TestStatement | null> => {
  return TestStatementRepository.findTestStatementByUserCodeAndStatementId(userCode, statementId);
};

const saveTestStatement = async (statementSavingDTO: TestStatementSavingDTO): Promise<TestStatement> => {
  const testStatement = new TestStatement(
    await TestService.findTestByUserCode(statementSavingDTO.userCode),
    await StatementService.findStatementById(statementSavingDTO.statementId),
    await OptionService.findOptionById(statementSavingDTO.selectedOptionId)
  );

  return await TestStatementRepository.saveTestStatement(testStatement);
};

export default {
  findTestStatementsByUserCode,
  findTestStatementByUserCodeAndStatementId,
  saveTestStatement
};
