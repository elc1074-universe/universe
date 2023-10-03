import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import Option from '../entities/database/Option';

const optionRepository = dataSource.getRepository(Option);

const findAllOptions = (): Promise<Option[]> => {
  return optionRepository.find();
};

const findOptionById = (id: number): Promise<Option | null> => {
  return optionRepository.findOneBy({
    id: Equal(id)
  });
};

export default {
  findAllOptions,
  findOptionById
};
