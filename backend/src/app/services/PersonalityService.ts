import { StatusCodes } from 'http-status-codes';

import Personality from '../entities/database/Personality';
import PersonalityRepository from '../repositories/PersonalityRepository';
import Statement from '../entities/database/Statement';
import StatementService from './StatementService';
import ApiError from '../entities/api/ApiError';

const NUMBER_OF_PERSONALITIES = 6;

const NUMBER_OF_STATEMENTS_BY_PERSONALITY = 7;

const findAll = (): Promise<Personality[]> => {
  return PersonalityRepository.findAll();
};

const findStatementsByPersonalityId = (id: number): Promise<Statement[]> => {
  return StatementService.findByPersonalityId(id);
};

const findStatementsByPersonalityLetter = (letter: string): Promise<Statement[]> => {
  return StatementService.findByPersonalityLetter(letter);
};

const findById = async (id: number): Promise<Personality> => {
  const personality = await PersonalityRepository.findById(id);

  if (!personality) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Personalidade não encontrada',
      `Não foi encontrada nenhuma personalidade com o id '${id}'`
    );
  }

  return personality;
};

const findByLetter = async (letter: string): Promise<Personality> => {
  const personality = await PersonalityRepository.findByLetter(letter);

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
  findAll,
  findStatementsByPersonalityId,
  findStatementsByPersonalityLetter,
  findById,
  findByLetter,
  NUMBER_OF_PERSONALITIES,
  NUMBER_OF_STATEMENTS_BY_PERSONALITY
};
