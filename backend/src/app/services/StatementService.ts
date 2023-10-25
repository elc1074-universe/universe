import { StatusCodes } from 'http-status-codes';

import Statement from '../entities/database/Statement';
import StatementRepository from '../repositories/StatementRepository';
import ApiError from '../entities/api/ApiError';

const findAllStatements = (): Promise<Statement[]> => {
  return StatementRepository.findAllStatements();
};

const findStatementById = async (id: number): Promise<Statement> => {
  const statement = await StatementRepository.findStatementById(id);

  if (!statement) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Declaração não encontrada',
      `Não foi encontrada nenhuma declaração com o id '${id}'`
    );
  }

  return statement;
};

const findStatementsByPersonalityId = (personalityId: number): Promise<Statement[]> => {
  return StatementRepository.findStatementsByPersonalityId(personalityId);
}

const findStatementsByPersonalityLetter = (personalityLetter: string): Promise<Statement[]> => {
  return StatementRepository.findStatementsByPersonalityLetter(personalityLetter);
}

export default {
  findAllStatements,
  findStatementsByPersonalityId,
  findStatementsByPersonalityLetter,
  findStatementById
};
