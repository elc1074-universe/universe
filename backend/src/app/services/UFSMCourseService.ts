import { StatusCodes } from 'http-status-codes';

import UFSMCourse from '../entities/database/UFSMCourse';
import UFSMCourseRepository from '../repositories/UFSMCourseRepository';
import ApiError from '../entities/api/ApiError';

const findAll = (): Promise<UFSMCourse[]> => {
  return UFSMCourseRepository.findAll();
};

const findById = async (id: number): Promise<UFSMCourse> => {
  const ufsmCourse = await UFSMCourseRepository.findById(id);

  if (!ufsmCourse) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      'Curso da UFSM não encontrado',
      `Não foi encontrado nenhum curso da UFSM com o id '${id}'`
    );
  }

  return ufsmCourse;
};

export default {
  findAll,
  findById
};
