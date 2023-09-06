import { AppDataSource } from '../../database/data-source';
import IUser from '../interfaces/IUser';
import User from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
  return userRepository.find();
};

export default {
  getUsers
};
