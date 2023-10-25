import UserValidator from '../../../validators/UserValidator';

export default class UserSavingDTO {

  username: string;

  email?: string;

  constructor(username: string, email?: string) {
    this.username = username;
    this.email = email || null;
  }

  validate = (): void => {
    UserValidator.validate(this);
  };
};
