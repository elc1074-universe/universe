import { StatusCodes } from 'http-status-codes';

import ApiError from '../api/ApiError';
import ApiValidationError from '../api/ApiValidationError';
import StringUtils from '../../utils/StringUtils';

const USERNAME_MINIMUM_LENGTH = 3;
const USERNAME_MAXIMUM_LENGTH = 63;

const EMAIL_MINIMUM_LENGTH = 6;
const EMAIL_MAXIMUM_LENGTH = 255;

export default class UserSavingDTO {

  username: string;

  email?: string;

  constructor(username: string, email?: string) {
    this.username = username;
    this.email = email || null;
  }

  validateUsername = (): void => {
    if (StringUtils.isBlank(this.username)) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        'Requisição malformada',
        'O username do usuário deve ser informado',
        [
          new ApiValidationError(
            UserSavingDTO.name,
            `O username do usuário deve ser uma string não nula/vazia de tamanho no intervalo [${USERNAME_MINIMUM_LENGTH}, ${USERNAME_MAXIMUM_LENGTH}]`,
            'username',
            this.username
          )
        ]
      );
    }

    if (this.username.length < USERNAME_MINIMUM_LENGTH || this.username.length > USERNAME_MAXIMUM_LENGTH) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        'Requisição malformada',
        'O username do usuário deve estar de acordo com as restrições de tamanho',
        [
          new ApiValidationError(
            UserSavingDTO.name,
            `O username do usuário deve ser uma string não nula/vazia de tamanho no intervalo [${USERNAME_MINIMUM_LENGTH}, ${USERNAME_MAXIMUM_LENGTH}]`,
            'username',
            this.username
          )
        ]
      );
    }
  };

  validateEmail = (): void => {
    if (!StringUtils.isBlank(this.email) && !StringUtils.isEmailValid(this.email)) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        'Requisição malformada',
        `O email informado é inválido`,
        [
          new ApiValidationError(
            UserSavingDTO.name,
            `O email do usuário deve ser uma string no formato RFC 5322 de tamanho no intervalo [${EMAIL_MINIMUM_LENGTH}, ${EMAIL_MAXIMUM_LENGTH}]`,
            'email',
            this.email
          )
        ]
      );
    }
  };

  validate = (): void => {
    this.validateUsername();
    this.validateEmail();
  };
};
