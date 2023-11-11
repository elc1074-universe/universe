import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import config from './config/config';
import dataSource from './database/data-source';
import routes from './app/routes/routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

dataSource
  .initialize()
  .then(async () => {
    app.listen(config.server.port, () => {

    });
  })
  .catch(error => console.log(error))
