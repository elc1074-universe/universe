import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Personality from '../entities/database/Personality';

const personalityRepository = dataSource.getRepository(Personality);

const findAllPersonalities = (): Promise<Personality[]> => {
  return personalityRepository.find();
};

const findPersonalityByLetter = (letter: string): Promise<Personality | null> => {
  return personalityRepository.findOneBy({
    letter: ILike(letter)
  });
};

export default {
  findPersonalityByLetter,
  findAllPersonalities
};
