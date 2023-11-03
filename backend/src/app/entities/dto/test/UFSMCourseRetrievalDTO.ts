import UFSMCourse from '../../database/UFSMCourse';

export default class UFSMCourseRetrievalDTO {

  id: number;

  name: string;

  site: string;

  level: string;

  constructor(ufsmCourse: UFSMCourse) {
    this.id = ufsmCourse.id;
    this.name = ufsmCourse.name;
    this.site = ufsmCourse.site;
    this.level = ufsmCourse.level;
  }
};
