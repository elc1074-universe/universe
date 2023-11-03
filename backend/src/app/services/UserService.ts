import { StatusCodes } from 'http-status-codes';

import User from '../entities/database/User';
import UserSavingDTO from '../entities/dto/user/UserSavingDTO';
import UserRepository from '../repositories/UserRepository';
import ApiError from '../entities/api/ApiError';

const ALPHANUMERIC_CHARACTERS: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const FIRST_USER_CODE: string = 'AAA';

const findAll = (): Promise<User[]> => {
  return UserRepository.findAll();
};

const findByCode = async (code: string): Promise<User> => {
  const user: User | null = await UserRepository.findByCode(code);

  if (!user) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Usuário não encontrado',
      `Não foi encontrado nenhum usuário com o código '${code}'`
    );
  }

  return user;
};

const findLastSavedCode = async (): Promise<string | null> => {
  return UserRepository.findLastSavedCode();
};

const save = async (userSavingDTO: UserSavingDTO): Promise<User> => {
  userSavingDTO.validate();

  const user: User = new User(await generateCode(), userSavingDTO.username, userSavingDTO.email);

  return UserRepository.save(user);
};

const generateCode = async (): Promise<string> => {
  const currentCode: string = await findLastSavedCode();

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
  findAll,
  findByCode,
  save
};
