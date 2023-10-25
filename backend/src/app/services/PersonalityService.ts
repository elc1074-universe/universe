import { StatusCodes } from 'http-status-codes';

import Personality from '../entities/database/Personality';
import PersonalityRepository from '../repositories/PersonalityRepository';
import Statement from '../entities/database/Statement';
import StatementService from './StatementService';
import ApiError from '../entities/api/ApiError';

const findAllPersonalities = (): Promise<Personality[]> => {
  return PersonalityRepository.findAllPersonalities();
};

const findPersonalityStatementsByPersonalityId = (id: number): Promise<Statement[]> => {
  return StatementService.findStatementsByPersonalityId(id);
};

const findPersonalityStatementsByPersonalityLetter = (letter: string): Promise<Statement[]> => {
  return StatementService.findStatementsByPersonalityLetter(letter);
};

const findPersonalityById = async (id: number): Promise<Personality> => {
  const personality = await PersonalityRepository.findPersonalityById(id);

  if (!personality) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Personalidade não encontrada',
      `Não foi encontrada nenhuma personalidade com o id '${id}'`
    );
  }

  return personality;
};

const findPersonalityByLetter = async (letter: string): Promise<Personality> => {
  const personality = await PersonalityRepository.findPersonalityByLetter(letter);

  if (!personality) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Personalidade não encontrada',
      `Não foi encontrada nenhuma personalidade com a letra '${letter}'`
    );
  }

  return personality;
};

export default {
  findAllPersonalities,
  findPersonalityStatementsByPersonalityId,
  findPersonalityStatementsByPersonalityLetter,
  findPersonalityById,
  findPersonalityByLetter
};
