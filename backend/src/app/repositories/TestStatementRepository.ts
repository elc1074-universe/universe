import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import TestStatement from '../entities/database/TestStatement';

const testStatementRepository = dataSource.getRepository(TestStatement);

const findAll = (): Promise<TestStatement[]> => {
  return testStatementRepository.find();
};

const findByUserCode = (userCode: string): Promise<TestStatement[]> => {
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

const findByUserCodeAndStatementId = (userCode: string, statementId: number): Promise<TestStatement | null> => {
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

const findCurrentStatementIdByUserCodeAndPersonalityId = async (userCode: string, personalityId: number): Promise<number> => {
  const result: any = await testStatementRepository
    .createQueryBuilder('test_statement')
    .innerJoin('test', 'test', 'test.id = test_id')
    .innerJoin('statement', 'statement', 'statement.id = statement_id')
    .innerJoin('user', 'user', 'user.id = user_id')
    .innerJoin('personality', 'personality', 'personality.id = personality_id')
    .select('statement_id', 'currentStatementId')
    .where('code = :userCode AND personality_id = :personalityId ORDER BY statement_id DESC LIMIT 1', { userCode: userCode, personalityId: personalityId })
    .getRawOne();

  return result ? result.currentStatementId : 0;
};

const findNumberOfCompletedStatementsByUserCodeAndPersonalityId = async (userCode: string, personalityId: number): Promise<number> => {
  const result: any = await testStatementRepository
    .createQueryBuilder('test_statement')
    .innerJoin('test', 'test', 'test.id = test_id')
    .innerJoin('user', 'user', 'user.id = user_id')
    .select('COUNT(test_statement.id)', 'number')
    .where('code = :userCode AND statement_id > :initialStatementId AND statement_id <= :finalStatementId', { userCode: userCode, initialStatementId: personalityId * 7 - 7, finalStatementId: personalityId * 7 })
    .getRawOne();

  return result ? result.number : 0;
};

const save = (testStatement: TestStatement): Promise<TestStatement> => {
  return testStatementRepository.save(testStatement);
};

const deleteByUserCodeAndPersonalityLetter = async (userCode: string, personalityLetter: string): Promise<void> => {
  const statementsToDelete = await testStatementRepository
    .createQueryBuilder('test_statement')
    .innerJoin('test', 'test', 'test.id = test_id')
    .innerJoin('statement', 'statement', 'statement.id = statement_id')
    .innerJoin('user', 'user', 'user.id = user_id')
    .innerJoin('personality', 'personality', 'personality.id = personality_id')
    .select('test_statement.id', 'id')
    .where('code = :userCode AND letter = :personalityLetter', { userCode: userCode, personalityLetter: personalityLetter })
    .getRawMany();

  await testStatementRepository
    .createQueryBuilder('test_statement')
    .delete()
    .where('id IN (:statementsToDelete)', { statementsToDelete: statementsToDelete.map((statementToDelete: any) => statementToDelete.id) })
    .execute();
};

export default {
  findAll,
  findByUserCode,
  findByUserCodeAndStatementId,
  findCurrentStatementIdByUserCodeAndPersonalityId,
  findNumberOfCompletedStatementsByUserCodeAndPersonalityId,
  save,
  deleteByUserCodeAndPersonalityLetter
};
