import UFSMCourse from '../../database/UFSMCourse';

export default class UFSMCourseRetrievalDTO {

  id: number;

  displayName: string;

  htmlAnchorElement: string;

  name: string;

  site: string;

  level: string;

  constructor(ufsmCourse: UFSMCourse) {
    this.id = ufsmCourse.id;
    this.displayName = `${ufsmCourse.name} (${ufsmCourse.level})`;
    this.htmlAnchorElement = `<a href=${ufsmCourse.site} title="${this.displayName}" target="_blank" rel="noopener noreferrer">${this.displayName}</a>`;
    this.name = ufsmCourse.name;
    this.site = ufsmCourse.site;
    this.level = ufsmCourse.level;
  }
};
