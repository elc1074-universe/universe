import { StatusCodes } from "http-status-codes";

import Game from "../entities/database/Game";
import GameRepository from "../repositories/GameRepository";
import ApiError from "../entities/api/ApiError";

const insertGame = async (gameData): Promise<Game> => {
  const game = await GameRepository.insertGame(gameData);

  if (!game) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      "Falha ao inserir o jogo",
      `Ocorreu um erro ao tentar inserir o jogo`
    );
  }

  return game;
};

const findAllGames = async (): Promise<Game[]> => {
  return GameRepository.findAllGames();
};

const findGameByUserCode = async (userCode: string): Promise<Game> => {
  const game = await GameRepository.findGameByUserCode(userCode);

  if (!game) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      "Jogo não encontrado",
      `Não foi encontrado nenhum jogo com o código de usuário '${userCode}'`
    );
  }

  return game;
};

export default {
  insertGame,
  findAllGames,
  findGameByUserCode,
};
