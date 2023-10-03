import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import UFSMCourse from '../entities/database/UFSMCourse';

const ufsmCourseRepository = dataSource.getRepository(UFSMCourse);

const findAllUFSMCourses = (): Promise<UFSMCourse[]> => {
  return ufsmCourseRepository.find();
};

const findUFSMCourseById = (id: number): Promise<UFSMCourse | null> => {
  return ufsmCourseRepository.findOneBy({
    id: Equal(id)
  });
};

export default {
  findAllUFSMCourses,
  findUFSMCourseById
};
