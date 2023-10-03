import { Equal } from 'typeorm';

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

export default {
  findStatementById,
  findAllStatements
};
