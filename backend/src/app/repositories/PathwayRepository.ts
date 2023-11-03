import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import Pathway from '../entities/database/Pathway';

const pathwayRepository = dataSource.getRepository(Pathway);

const findAll = (): Promise<Pathway[]> => {
  return pathwayRepository.find();
};

const findById = (id: number): Promise<Pathway | null> => {
  return pathwayRepository.findOneBy({
    id: Equal(id)
  });
};

export default {
  findAll,
  findById
};
