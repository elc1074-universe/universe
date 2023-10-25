import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import TestStatement from '../entities/database/TestStatement';

const testStatementRepository = dataSource.getRepository(TestStatement);

const findAllTestsStatements = (): Promise<TestStatement[]> => {
  return testStatementRepository.find();
};

const findTestStatementsByUserCode = (userCode: string): Promise<TestStatement[]> => {
  return testStatementRepository.find({
    where: {
      test: {
        user: {
          code: ILike(userCode)
        }
      }
    }
  });
};

const findTestStatementByUserCodeAndStatementId = (userCode: string, statementId: number): Promise<TestStatement | null> => {
  return testStatementRepository.findOneBy({
    test: {
      user: {
        code: ILike(userCode)
      },
    },
    statement: {
      id: Equal(statementId)
    }
  });
};

const saveTestStatement = (testStatement: TestStatement): Promise<TestStatement> => {
  return testStatementRepository.save(testStatement);
};

export default {
  findAllTestsStatements,
  findTestStatementsByUserCode,
  findTestStatementByUserCodeAndStatementId,
  saveTestStatement
};
