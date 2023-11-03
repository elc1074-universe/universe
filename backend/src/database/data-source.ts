import 'reflect-metadata';
import { DataSource } from 'typeorm';

import config from '../config/config';
import Option from '../app/entities/database/Option';
import Pathway from '../app/entities/database/Pathway';
import Personality from '../app/entities/database/Personality';
import PersonalityPathway from '../app/entities/database/PersonalityPathway';
import PersonalityPathwayUFSMCourse from '../app/entities/database/PersonalityPathwayUFSMCourse';
import Result from '../app/entities/database/Result';
import Statement from '../app/entities/database/Statement';
import Test from '../app/entities/database/Test';
import TestStatement from '../app/entities/database/TestStatement';
import UFSMCourse from '../app/entities/database/UFSMCourse';
import User from '../app/entities/database/User';

const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.pass,
  database: config.database.name,
  synchronize: false,
  logging: false,
  entities: [
    Option, Pathway, Personality, PersonalityPathway,
    PersonalityPathwayUFSMCourse, Result, Statement, Test, TestStatement, UFSMCourse, User
  ],
  migrations: [],
  subscribers: [],
});

export default dataSource;
