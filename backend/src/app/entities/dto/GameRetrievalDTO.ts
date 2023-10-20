import Game from "../database/Game";

export default class GameRetrievalDTO {
  id: number;

  userId: number;

  createdAt: Date;

  constructor(game: Game) {
    this.id = game.id;
    this.userId = game.user.id;
    this.createdAt = game.createdAt;
  }
}
