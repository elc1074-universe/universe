import { StatusCodes } from 'http-status-codes';

import Result from '../entities/database/Result';
import ResultRepository from '../repositories/ResultRepository';
import TestService from './TestService';
import TestStatementService from './TestStatementService';
import ApiError from '../entities/api/ApiError';

const findByUserCode = async (userCode: string): Promise<Result> => {
  const result = await ResultRepository.findByUserCode(userCode);

  if (!result) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Resultado não encontrado',
      `Não foi encontrado nenhum resultado com o código de usuário '${userCode}'`
    );
  }

  return result;
};

const computeAndSave = async (userCode: string): Promise<Result | null> => {
  const isTestCompleted = await TestService.isCompleted(userCode);

  if (!isTestCompleted) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST, 'Teste em andamento', `Não foi possível apurar o resultado porque o teste '${userCode}' ainda está em andamento`
    );
  }

  const statements = await TestStatementService.findByUserCode(userCode);

  const riasecScore = { 'R': 0, 'I': 0, 'A': 0, 'S': 0, 'E': 0, 'C': 0 };

  for (let statement in statements) {
    const selectedOption = statements[statement].selectedOption;

    if (!selectedOption) continue;

    const riasecLetter = selectedOption?.statement?.personality?.letter;

    riasecScore[riasecLetter] += selectedOption.value;
  }

  const interestCode = Object
    .keys(riasecScore)
    .sort((a, b) => riasecScore[b] - riasecScore[a])
    .join('')
    .substring(0, 3);

  const result = new Result(
    userCode, riasecScore['R'], riasecScore['I'], riasecScore['A'],
    riasecScore['S'], riasecScore['E'], riasecScore['C'], interestCode
  );

  return await ResultRepository.save(result);
};

export default {
  findByUserCode: findByUserCode,
  computeAndSave: computeAndSave
};
