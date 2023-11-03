import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import UFSMCourse from '../entities/database/UFSMCourse';

const ufsmCourseRepository = dataSource.getRepository(UFSMCourse);

const findAll = (): Promise<UFSMCourse[]> => {
  return ufsmCourseRepository.find();
};

const findById = (id: number): Promise<UFSMCourse | null> => {
  return ufsmCourseRepository.findOneBy({
    id: Equal(id)
  });
};

export default {
  findAll,
  findById
};
