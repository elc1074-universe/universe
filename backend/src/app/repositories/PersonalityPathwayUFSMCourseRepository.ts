import { Equal, ILike } from 'typeorm';

import dataSource from '../../database/data-source';
import PersonalityPathwayUFSMCourse from '../entities/database/PersonalityPathwayUFSMCourse';

const personalityPathwayUFSMCourseRepository = dataSource.getRepository(PersonalityPathwayUFSMCourse);

const findAll = (): Promise<PersonalityPathwayUFSMCourse[]> => {
  return personalityPathwayUFSMCourseRepository.find();
};

const findByPersonalityLetterAndPathwayIdAndUFSMCourseId = (
  personalityLetter: string,
  pathwayId: number,
  ufsmCourseId: number
): Promise<PersonalityPathwayUFSMCourse | null> => {
  return personalityPathwayUFSMCourseRepository.findOneBy({
    personalityPathway: {
      personality: {
        letter: ILike(personalityLetter)
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

const findByPersonalityLetter = (personalityLetter: string): Promise<PersonalityPathwayUFSMCourse[]> => {
  return personalityPathwayUFSMCourseRepository.find({
    where: {
      personalityPathway: {
        personality: {
          letter: ILike(personalityLetter)
        }
      }
    }
  });
};

export default {
  findAll,
  findByPersonalityLetterAndPathwayIdAndUFSMCourseId,
  findByPersonalityLetter
};
