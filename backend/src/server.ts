import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';

import config from './config/config';
import dataSource from './database/data-source';
import routes from './app/routes/routes';

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'OPTIONS', 'DELETE'],
  allowedHeaders: ['Access-Control-Allow-Headers', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Access-Control-Allow-Private-Network', 'Origin', 'Content-Type', 'Accept', 'X-Requested-With'],
  optionsSuccessStatus: StatusCodes.OK
}));

app.use(express.json());

app.use(routes);

dataSource
  .initialize()
  .then(async () => {
    app.listen(config.server.port, () => {

    });
  })
  .catch(error => console.log(error))
