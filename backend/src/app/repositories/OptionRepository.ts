import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import Option from '../entities/database/Option';

const optionRepository = dataSource.getRepository(Option);

const findByStatementId = (statementId: number): Promise<Option[]> => {
  return optionRepository.find({
    where: {
      statement: {
        id: Equal(statementId)
      }
    }
  });
};

const findById = (id: number): Promise<Option | null> => {
  return optionRepository.findOneBy({
    id: Equal(id)
  });
};

export default {
  findByStatementId,
  findById
};
