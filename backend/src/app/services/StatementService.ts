import { StatusCodes } from 'http-status-codes';

import Statement from '../entities/database/Statement';
import StatementRepository from '../repositories/StatementRepository';
import ApiError from '../entities/api/ApiError';

const findAll = (): Promise<Statement[]> => {
  return StatementRepository.findAll();
};

const findById = async (id: number): Promise<Statement> => {
  const statement = await StatementRepository.findById(id);

  if (!statement) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Declaração não encontrada',
      `Não foi encontrada nenhuma declaração com o id '${id}'`
    );
  }

  return statement;
};

const findByPersonalityId = (personalityId: number): Promise<Statement[]> => {
  return StatementRepository.findByPersonalityId(personalityId);
}

const findByPersonalityLetter = (personalityLetter: string): Promise<Statement[]> => {
  return StatementRepository.findByPersonalityLetter(personalityLetter);
}

export default {
  findAll,
  findByPersonalityId,
  findByPersonalityLetter,
  findById
};
