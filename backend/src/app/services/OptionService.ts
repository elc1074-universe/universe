import { StatusCodes } from 'http-status-codes';

import Option from '../entities/database/Option';
import OptionRepository from '../repositories/OptionRepository';
import ApiError from '../entities/api/ApiError';

const findOptionById = async (id: number): Promise<Option> => {
  const option = await OptionRepository.findOptionById(id);

  if (!option) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Opção não encontrada',
      `Não foi encontrada nenhuma opção com o id '${id}'`
    );
  }

  return option;
};

const findOptionsByStatementId = (statementId: number): Promise<Option[]> => {
  return OptionRepository.findOptionsByStatementId(statementId);
};

export default {
  findOptionsByStatementId,
  findOptionById
};
