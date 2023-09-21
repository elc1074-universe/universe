import { ILike } from 'typeorm';

import { AppDataSource } from '../../database/data-source';
import User from '../entities/database/User';
import UserSavingDTO from '../entities/dto/UserSavingDTO';

const ALPHANUMERIC_CHARACTERS: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const FIRST_USER_CODE: string = 'AAA';

const userRepository = AppDataSource.getRepository(User);

const findAllUsers = (): Promise<User[]> => {
  return userRepository.find();
};

const findUserByUsername = (username: string): Promise<User> => {
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

const saveUser = async (userCreationDTO: UserSavingDTO): Promise<User> => {
  if (!userCreationDTO.username) {
    throw new Error(`O username do usuário precisa ser informado`);
  }

  const isUsernameAlreadyTaken: boolean = await userRepository
    .exist({
      where: {
        username: ILike(userCreationDTO.username)
      }
    });

  if (isUsernameAlreadyTaken) {
    throw new Error(`Já existe um usuário com o username '${userCreationDTO.username}'`);
  }

  const user: User = new User();

  user.username = userCreationDTO.username;
  user.email = userCreationDTO.email || null;
  user.code = await generateUserCode();

  return userRepository.save(user);
};

const generateUserCode = async (): Promise<string> => {
  const currentCode: string = await findLastSavedUserCode();

  if (!currentCode) return FIRST_USER_CODE;

  const currentCodeCharacters: string[] = Array.from(currentCode);

  if (currentCodeCharacters.length != 3) return currentCode;

  const nextCodeCharacters: string[] = Array.from(currentCodeCharacters);

  let shouldCarry: boolean = true;

  for (let i: number = currentCodeCharacters.length - 1; i >= 0; i--) {
    if (!shouldCarry) continue;

    const currentCodeCharacter: string = currentCodeCharacters[i];

    if (currentCodeCharacter === '9') {
      nextCodeCharacters[i] = 'A';
    } else if (currentCodeCharacter === 'Z') {
      nextCodeCharacters[i] = '0';
      shouldCarry = false;
    } else {
      nextCodeCharacters[i] = ALPHANUMERIC_CHARACTERS[ALPHANUMERIC_CHARACTERS.indexOf(currentCodeCharacter) + 1]
      shouldCarry = false;
    }
  }

  if (shouldCarry) currentCodeCharacters.unshift('A');

  return nextCodeCharacters.join('');
};

export default {
  findAllUsers,
  findUserByUsername,
  findUserCodeByUsername,
  saveUser
};
