import { ILike } from 'typeorm';
import dataSource from '../../database/data-source';
import Option from '../entities/database/Option';

const optionRepository = dataSource.getRepository(Option);

const findOptionById = (id: number): Promise<Option | null> => {
    return optionRepository.findOneBy({
        id: ILike(id)
    });
};

const findOptionsByStatementId = (statement_id: number): Promise<Option[]> => {
  return optionRepository.createQueryBuilder("option")
      .innerJoinAndSelect("option.statement", "statement")
      .where("statement.id = :id", { id: statement_id })
      .getMany();
};

export default {
  findOptionById,
  findOptionsByStatementId,
};
