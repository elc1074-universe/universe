import { StatusCodes } from 'http-status-codes';

import Personality from '../entities/database/Personality';
import PersonalityRepository from '../repositories/PersonalityRepository';
import ApiError from '../entities/api/ApiError';

const findPersonalityById = async (id: number): Promise<Personality> => {
  const personality: Personality | undefined = await PersonalityRepository.findPersonalityById(id);

  if (!personality) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Personalidade não encontrada',
      `Não foi encontrada nenhuma personalidade com o id '${id}'`
    );
  }

  return personality;
};

export default {
  findPersonalityById,
};
