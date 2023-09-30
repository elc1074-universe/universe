import { User } from './user';

export class Game {
  id: number;
  user: User;
  createdAt: Date;

  constructor(
    id: number,
    user: User,
    createdAt: Date
  ) {
    this.id = id;
    this.user = user;
    this.createdAt = createdAt;
  }
}
