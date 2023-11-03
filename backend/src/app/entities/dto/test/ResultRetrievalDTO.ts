import Result from '../../database/Result';
import UFSMCourseRetrievalDTO from './UFSMCourseRetrievalDTO';
import PersonalityPathwayUFSMCourseService from '../../../services/PersonalityPathwayUFSMCourseService';

export default class ResultRetrievalDTO {

  rScore: number;

  iScore: number;

  aScore: number;

  sScore: number;

  eScore: number;

  cScore: number;

  interestCode: string;

  mainUFSMCourses: UFSMCourseRetrievalDTO[];

  relatedUFSMCourses: UFSMCourseRetrievalDTO[];

  createdAt: string;

  private constructor(
    result: Result,
    mainUFSMCourses: UFSMCourseRetrievalDTO[],
    relatedUFSMCourses: UFSMCourseRetrievalDTO[]
  ) {
    this.rScore = result.rScore;
    this.iScore = result.iScore;
    this.aScore = result.aScore;
    this.sScore = result.sScore;
    this.eScore = result.eScore;
    this.cScore = result.cScore;
    this.interestCode = result.interestCode;
    this.mainUFSMCourses = mainUFSMCourses;
    this.relatedUFSMCourses = relatedUFSMCourses;
    this.createdAt = result.createdAt.toLocaleString('pt-BR');
  }

  static async create(result: Result): Promise<ResultRetrievalDTO> {
    const interestCodeLetters = Array.from(result.interestCode);

    const mainUFSMCourses = [];
    const relatedUFSMCourses = [];

    for (const interestCodeLetter of interestCodeLetters) {
      const personalityPathwaysUFSMCourses = await PersonalityPathwayUFSMCourseService.findByPersonalityLetter(interestCodeLetter);

      for (const personalityPathwayUFSMCourse of personalityPathwaysUFSMCourses) {
        const ufsmCourse = new UFSMCourseRetrievalDTO(personalityPathwayUFSMCourse.ufsmCourse);

        if (personalityPathwayUFSMCourse.personalityPathway.isMainPathway) {
          mainUFSMCourses.push(ufsmCourse);
        } else {
          relatedUFSMCourses.push(ufsmCourse);
        }
      }
    }

    return new ResultRetrievalDTO(result, mainUFSMCourses, relatedUFSMCourses);
  }
};
