import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import PersonalityPathwayUFSMCourse from '../entities/database/PersonalityPathwayUFSMCourse';

const personalityPathwayUFSMCourseRepository = dataSource.getRepository(PersonalityPathwayUFSMCourse);

const findAllPersonalitiesPathwaysUFSMCourses = (): Promise<PersonalityPathwayUFSMCourse[]> => {
  return personalityPathwayUFSMCourseRepository.find();
};

const findPersonalityPathwayUFSMCourseByPersonalityIdAndPathwayIdAndUFSMCourseId = (personalityId: number, pathwayId: number, ufsmCourseId: number): Promise<PersonalityPathwayUFSMCourse | null> => {
  return personalityPathwayUFSMCourseRepository.findOneBy({
    personalityPathway: {
      personality: {
        id: Equal(personalityId)
      },
      pathway: {
        id: Equal(pathwayId)
      }
    },
    ufsmCourse: {
      id: Equal(ufsmCourseId)
    }
  });
};

export default {
  findAllPersonalitiesPathwaysUFSMCourses,
  findPersonalityPathwayUFSMCourseByPersonalityIdAndPathwayIdAndUFSMCourseId
};
