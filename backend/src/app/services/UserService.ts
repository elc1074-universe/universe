import { StatusCodes } from 'http-status-codes';

import User from '../entities/database/User';
import UserSavingDTO from '../entities/dto/UserSavingDTO';
import UserRepository from '../repositories/UserRepository';
import ApiError from '../entities/api/ApiError';

const ALPHANUMERIC_CHARACTERS: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const FIRST_USER_CODE: string = 'AAA';

const findAllUsers = (): Promise<User[]> => {
  return UserRepository.findAllUsers();
};

const findUserByUsername = async (username: string): Promise<User> => {
  const user: User | null = await UserRepository.findUserByUsername(username);

  if (!user) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Usuário não encontrado',
      `Não foi encontrado nenhum usuário com o username '${username}'`
    );
  }

  return user;
};

const findUserCodeByUsername = async (username: string): Promise<string> => {
  const userCode: string | null = await UserRepository.findUserCodeByUsername(username);

  if (!userCode) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Usuário não encontrado',
      `Não foi encontrado nenhum usuário com o username '${username}'`
    );
  }

  return userCode;
};

const findLastSavedUserCode = async (): Promise<string | null> => {
  return UserRepository.findLastSavedUserCode();
};

const saveUser = async (userSavingDTO: UserSavingDTO): Promise<User> => {
  userSavingDTO.validate();

  const isUsernameAlreadyTaken: boolean = await UserRepository.isUsernameAlreadyTaken(userSavingDTO.username);

  if (isUsernameAlreadyTaken) {
    throw new ApiError(
      StatusCodes.CONFLICT, 'Conflito', `Já existe um usuário com o username '${userSavingDTO.username}'`
    );
  }

  const user: User = new User(await generateUserCode(), userSavingDTO.username, userSavingDTO.email);

  return UserRepository.saveUser(user);
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
