import { StatusCodes } from 'http-status-codes';

import User from '../entities/database/User';
import UserSavingDTO from '../entities/dto/user/UserSavingDTO';
import TestCreationDTO from '../entities/dto/test/TestCreationDTO';
import ApiError from '../entities/api/ApiError';
import ApiValidationError from '../entities/api/ApiValidationError';
import StringUtils from '../utils/StringUtils';

const USERNAME_MINIMUM_LENGTH = 3;
const USERNAME_MAXIMUM_LENGTH = 63;

const EMAIL_MINIMUM_LENGTH = 6;
const EMAIL_MAXIMUM_LENGTH = 255;

const checkUsernamePresence = (user: User | UserSavingDTO | TestCreationDTO): void => {
  if (StringUtils.isBlank(user.username)) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      'Requisição malformada',
      'O username do usuário deve ser informado',
      [
        new ApiValidationError(
          user.constructor.name,
          `O username do usuário deve ser uma string não nula/vazia de tamanho no intervalo [${USERNAME_MINIMUM_LENGTH}, ${USERNAME_MAXIMUM_LENGTH}]`,
          'username',
          user.username
        )
      ]
    );
  }
};

const checkUsernameLength = (user: User | UserSavingDTO | TestCreationDTO): void => {
  if (user.username.length < USERNAME_MINIMUM_LENGTH || user.username.length > USERNAME_MAXIMUM_LENGTH) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      'Requisição malformada',
      'O username do usuário deve estar de acordo com as restrições de tamanho',
      [
        new ApiValidationError(
          user.constructor.name,
          `O username do usuário deve ser uma string não nula/vazia de tamanho no intervalo [${USERNAME_MINIMUM_LENGTH}, ${USERNAME_MAXIMUM_LENGTH}]`,
          'username',
          user.username
        )
      ]
    );
  }
};

const validateUsername = (user: User | UserSavingDTO | TestCreationDTO): void => {
  checkUsernamePresence(user);
  checkUsernameLength(user);
};

const validateEmail = (user: User | UserSavingDTO): void => {
  if (!StringUtils.isBlank(user.email) && !StringUtils.isEmailValid(user.email)) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      'Requisição malformada',
      `O email informado é inválido`,
      [
        new ApiValidationError(
          user.constructor.name,
          `O email do usuário deve ser uma string no formato RFC 5322 de tamanho no intervalo [${EMAIL_MINIMUM_LENGTH}, ${EMAIL_MAXIMUM_LENGTH}]`,
          'email',
          user.email
        )
      ]
    );
  }
};

const validate = (user: User | UserSavingDTO | TestCreationDTO): void => {
  validateUsername(user);

  if (!(user instanceof TestCreationDTO)) {
    validateEmail(user);
  }
};

export default {
  validate
};
