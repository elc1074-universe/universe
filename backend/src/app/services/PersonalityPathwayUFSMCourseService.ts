import { StatusCodes } from 'http-status-codes';

import PersonalityPathwayUFSMCourse from '../entities/database/PersonalityPathwayUFSMCourse';
import PersonalityPathwayUFSMCourseRepository from '../repositories/PersonalityPathwayUFSMCourseRepository';
import ApiError from '../entities/api/ApiError';

const findAll = (): Promise<PersonalityPathwayUFSMCourse[]> => {
  return PersonalityPathwayUFSMCourseRepository.findAll();
};

const findByPersonalityLetterAndPathwayIdAndUFSMCourseId = async (
  personalityLetter: string,
  pathwayId: number,
  ufsmCourseId: number
): Promise<PersonalityPathwayUFSMCourse | null> => {
  const personalityPathwayUFSMCourse = await PersonalityPathwayUFSMCourseRepository.findByPersonalityLetterAndPathwayIdAndUFSMCourseId(personalityLetter, pathwayId, ufsmCourseId);

  if (!personalityPathwayUFSMCourse) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Entidade não encontrada',
      `Não foi encontrada nenhuma relação entre a personalidade com a letra '${personalityLetter}', o caminho com o id '${pathwayId}' e o curso da UFSM com id '${ufsmCourseId}'`
    );
  }

  return personalityPathwayUFSMCourse;
};

const findByPersonalityLetter = (personalityLetter: string): Promise<PersonalityPathwayUFSMCourse[]> => {
  return PersonalityPathwayUFSMCourseRepository.findByPersonalityLetter(personalityLetter);
};

export default {
  findAll,
  findByPersonalityLetterAndPathwayIdAndUFSMCourseId,
  findByPersonalityLetter
};
