import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Test from '../entities/database/Test';

const testRepository = dataSource.getRepository(Test);

const findAll = (): Promise<Test[]> => {
  return testRepository.find();
};

const findByUserCode = (userCode: string): Promise<Test | null> => {
  return testRepository.findOneBy({
    user: {
      code: ILike(userCode),
    },
  });
};

const save = (test: Test): Promise<Test> => {
  return testRepository.save(test);
};

export default {
  findAll,
  findByUserCode,
  save
};
