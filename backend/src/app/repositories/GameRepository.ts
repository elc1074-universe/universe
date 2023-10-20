import { ILike } from "typeorm";

import dataSource from "../../database/data-source";
import Game from "../entities/database/Game";
import userRepository from "./UserRepository";

const gameRepository = dataSource.getRepository(Game);

const findAllGames = (): Promise<Game[]> => {
  return gameRepository.find();
};

const findGameByUserCode = (userCode: string): Promise<Game | null> => {
  return gameRepository.findOneBy({
    user: {
      code: ILike(userCode),
    },
  });
};

const insertGame = async (username: string): Promise<Game> => {
  const user = await userRepository.findUserByUsername(username);

  if (!user) {
    throw new Error("User not found");
  }

  const game = new Game();
  game.user = user;

  return gameRepository.save(game);
};

export default {
  findAllGames,
  findGameByUserCode,
  insertGame,
};
