import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Result from '../entities/database/Result';

const resultRepository = dataSource.getRepository(Result);

const findAllResults = (): Promise<Result[]> => {
  return resultRepository.find();
};

const findResultByUserCode = (userCode: string): Promise<Result | null> => {
  return resultRepository.findOneBy({
    userCode: ILike(userCode)
  });
};

export default {
  findAllResults,
  findResultByUserCode
};
