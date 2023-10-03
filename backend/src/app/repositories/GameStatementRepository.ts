import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import GameStatement from '../entities/database/GameStatement';

const gameStatementRepository = dataSource.getRepository(GameStatement);

const findAllGamesStatements = (): Promise<GameStatement[]> => {
  return gameStatementRepository.find();
};

const findGameStatementByUserCodeAndStatementId = (userCode: string, statementId: number): Promise<GameStatement | null> => {
  return gameStatementRepository.findOneBy({
    game: {
      user: {
        code: ILike(userCode)
      },
    },
    statement: {
      id: Equal(statementId)
    }
  });
};

export default {
  findAllGamesStatements,
  findGameStatementByUserCodeAndStatementId
};
