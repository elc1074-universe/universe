import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Personality from '../entities/database/Personality';

const personalityRepository = dataSource.getRepository(Personality);

const findPersonalityById = (id: number): Promise<Personality | undefined> => {
  return personalityRepository.findOne({ where: { id: id } });
};

export default {
  findPersonalityById,
};
