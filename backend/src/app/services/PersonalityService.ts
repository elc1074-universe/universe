import { StatusCodes } from 'http-status-codes';

import Personality from '../entities/database/Personality';
import PersonalityRepository from '../repositories/PersonalityRepository';
import ApiError from '../entities/api/ApiError';

const findAllPersonalities = (): Promise<Personality[]> => {
  return PersonalityRepository.findAllPersonalities();
};

const findPersonalityByLetter = async (letter: string): Promise<Personality> => {
  const personality: Personality | null = await PersonalityRepository.findPersonalityByLetter(letter);

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
  findPersonalityByLetter
};
