import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Personality from '../entities/database/Personality';

const personalityRepository = dataSource.getRepository(Personality);

const findAll = (): Promise<Personality[]> => {
  return personalityRepository.find();
};

const findById = (id: number): Promise<Personality | null> => {
  return personalityRepository.findOneBy({
    id: Equal(id)
  });
};

const findByLetter = (letter: string): Promise<Personality | null> => {
  return personalityRepository.findOneBy({
    letter: ILike(letter)
  });
};

export default {
  findAll,
  findById,
  findByLetter
};
