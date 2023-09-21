import User from '../database/User';

export default class UserRetrievalDTO {

  id: number;

  code: string;

  username: string;

  email?: string;

  constructor(user: User) {
    this.id = user.id;
    this.code = user.code;
    this.username = user.username;
    this.email = user.email || null;
  }
};
