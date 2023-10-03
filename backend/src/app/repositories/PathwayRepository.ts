import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import Pathway from '../entities/database/Pathway';

const pathwayRepository = dataSource.getRepository(Pathway);

const findAllPathways = (): Promise<Pathway[]> => {
  return pathwayRepository.find();
};

const findPathwayById = (id: number): Promise<Pathway | null> => {
  return pathwayRepository.findOneBy({
    id: Equal(id)
  });
};

export default {
  findAllPathways,
  findPathwayById
};
