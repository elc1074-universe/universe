import { ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import Game from '../entities/database/Game';

const gameRepository = dataSource.getRepository(Game);

const findAllGames = (): Promise<Game[]> => {
  return gameRepository.find();
};

const findGameByUserCode = (userCode: string): Promise<Game | null> => {
  return gameRepository.findOneBy({
    user: {
      code: ILike(userCode)
    }
  });
};

export default {
  findAllGames,
  findGameByUserCode
};
