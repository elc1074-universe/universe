import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Result from '../entities/database/Result';

const resultRepository = dataSource.getRepository(Result);

const findAll = (): Promise<Result[]> => {
  return resultRepository.find();
};

const findByUserCode = (userCode: string): Promise<Result | null> => {
  return resultRepository.findOneBy({
    userCode: ILike(userCode)
  });
};

const save = (result: Result): Promise<Result> => {
  return resultRepository.save(result);
};

export default {
  findAll,
  findByUserCode,
  save
};
