import 'reflect-metadata';
import { DataSource } from 'typeorm';

import config from '../config/config';
import User from '../app/entities/database/User';
import Statement from '../app/entities/database/Statement';
import Personality from '../app/entities/database/Personality';

const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.pass,
  database: config.database.name,
  synchronize: true,
  logging: false,
  entities: [User, Statement, Personality],
  migrations: [],
  subscribers: []
});

export default dataSource;
