import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Statement from '../entities/database/Statement';

const statementRepository = dataSource.getRepository(Statement);

const findAll = (): Promise<Statement[]> => {
  return statementRepository.find();
};

const findById = (id: number): Promise<Statement | null> => {
  return statementRepository.findOneBy({
    id: Equal(id)
  });
};

const findByPersonalityId = (personalityId: number): Promise<Statement[]> => {
  return statementRepository.find({
    where: {
      personality: {
        id: Equal(personalityId)
      }
    }
  });
};

const findByPersonalityLetter = (personalityLetter: string): Promise<Statement[]> => {
  return statementRepository.find({
    where: {
      personality: {
        letter: ILike(personalityLetter)
      }
    }
  });
};

export default {
  findAll,
  findById,
  findByPersonalityId,
  findByPersonalityLetter
};
