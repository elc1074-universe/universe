import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import User from '../entities/database/User';

const userRepository = dataSource.getRepository(User);

const findAllUsers = (): Promise<User[]> => {
  return userRepository.find();
};

const findUserByCode = (code: string): Promise<User | null> => {
  return userRepository.findOneBy({
    code: ILike(code),
  });
};

const findLastSavedUserCode = async (): Promise<string | null> => {
  const result: any = await userRepository
    .createQueryBuilder('user')
    .select('code')
    .take(1)
    .orderBy('created_at', 'DESC')
    .getRawOne();

  return result ? result.code : null;
};

const saveUser = async (user: User): Promise<User> => {
  return userRepository.save(user);
};

export default {
  findAllUsers,
  findUserByCode,
  findLastSavedUserCode,
  saveUser
};
