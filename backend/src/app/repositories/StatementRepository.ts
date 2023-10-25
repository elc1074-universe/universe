import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Statement from '../entities/database/Statement';

const statementRepository = dataSource.getRepository(Statement);

const findAllStatements = (): Promise<Statement[]> => {
  return statementRepository.find();
};

const findStatementById = (id: number): Promise<Statement | null> => {
  return statementRepository.findOneBy({
    id: Equal(id)
  });
};

const findStatementsByPersonalityId = (personalityId: number): Promise<Statement[]> => {
  return statementRepository.find({
    where: {
      personality: {
        id: Equal(personalityId)
      }
    }
  });
};

const findStatementsByPersonalityLetter = (personalityLetter: string): Promise<Statement[]> => {
  return statementRepository.find({
    where: {
      personality: {
        letter: ILike(personalityLetter)
      }
    }
  });
};

export default {
  findAllStatements,
  findStatementById,
  findStatementsByPersonalityId,
  findStatementsByPersonalityLetter
};
