import 'reflect-metadata';
import { DataSource } from 'typeorm';

import config from '../config/config';
import User from '../app/entities/database/User';

const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.pass,
  database: config.database.name,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
});

export default dataSource;
