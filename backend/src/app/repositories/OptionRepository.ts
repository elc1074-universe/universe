import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Option from '../entities/database/Option';

const optionRepository = dataSource.getRepository(Option);

const findOptionById = (id: number): Promise<Option | null> => {
    return optionRepository.findOneBy({
        id: ILike(id)
    });
};

export default {
  findOptionById,
};
