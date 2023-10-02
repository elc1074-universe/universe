// statement.service.js
import { StatusCodes } from 'http-status-codes';

import Statement from '../entities/database/Statement';
import StatementRepository from '../repositories/StatementRepository';
import ApiError from '../entities/api/ApiError';

const findStatementById = async (id: number): Promise<Statement> => {
  const statement: Statement | null = await StatementRepository.findStatementById(id);

  if (!statement) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Declaração não encontrada',
      `Não foi encontrada nenhuma declaração com o id '${id}'`
    );
  }

  return statement;
};

export default {
  findStatementById,
};
