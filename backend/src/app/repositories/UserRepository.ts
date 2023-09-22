import { ILike } from 'typeorm';

import { AppDataSource } from '../../database/data-source';
import User from '../entities/database/User';

const userRepository = AppDataSource.getRepository(User);

const findAllUsers = (): Promise<User[]> => {
  return userRepository.find();
};

const findUserByUsername = (username: string): Promise<User | null> => {
  return userRepository.findOneBy({
    username: ILike(username)
  });
};

const findUserCodeByUsername = async (username: string): Promise<string | null> => {
  const result: any = await userRepository
    .createQueryBuilder('user')
    .select('code')
    .where('user.code ILIKE :username', { username })
    .getRawOne()['code'];

    return result ? result.code : null;
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

const isUsernameAlreadyTaken = (username: string): Promise<boolean> => {
  return userRepository
    .exist({
      where: {
        username: ILike(username)
      }
    });
};

const saveUser = async (user: User): Promise<User> => {
  return userRepository.save(user);
};

export default {
  findAllUsers,
  findUserByUsername,
  findUserCodeByUsername,
  findLastSavedUserCode,
  isUsernameAlreadyTaken,
  saveUser
};
