import UFSMCourseRetrievalDTO from './UFSMCourseRetrievalDTO';

export default class ResultRetrievalDTO {

  rScore!: number;

  iScore!: number;

  aScore!: number;

  sScore!: number;

  eScore!: number;

  cScore!: number;

  interestCode!: string;

  mainUFSMCourses!: UFSMCourseRetrievalDTO[];

  relatedUFSMCourses!: UFSMCourseRetrievalDTO[];

  createdAt!: string;
};
