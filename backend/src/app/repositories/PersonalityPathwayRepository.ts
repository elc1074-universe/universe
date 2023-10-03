import { Equal } from 'typeorm';

import dataSource from '../../database/data-source';
import PersonalityPathway from '../entities/database/PersonalityPathway';

const personalityPathwayRepository = dataSource.getRepository(PersonalityPathway);

const findAllPersonalitiesPathways = (): Promise<PersonalityPathway[]> => {
  return personalityPathwayRepository.find();
};

const findPersonalityPathwayByPersonalityIdAndPathwayId = (personalityId: number, pathwayId: number): Promise<PersonalityPathway | null> => {
  return personalityPathwayRepository.findOneBy({
    personality: {
      id: Equal(personalityId)
    },
    pathway: {
      id: Equal(pathwayId)
    }
  });
};

export default {
  findAllPersonalitiesPathways,
  findPersonalityPathwayByPersonalityIdAndPathwayId
};
