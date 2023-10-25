import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Test from '../entities/database/Test';

const testRepository = dataSource.getRepository(Test);

const findAllTests = (): Promise<Test[]> => {
  return testRepository.find();
};

const findTestByUserCode = (userCode: string): Promise<Test | null> => {
  return testRepository.findOneBy({
    user: {
      code: ILike(userCode),
    },
  });
};

const saveTest = (test: Test): Promise<Test> => {
  return testRepository.save(test);
};

export default {
  findAllTests,
  findTestByUserCode,
  saveTest
};
