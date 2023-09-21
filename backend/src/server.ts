import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import { AppDataSource } from './database/data-source';
import routes from './app/routes/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

AppDataSource
  .initialize()
  .then(async () => {
    app.listen(3000, () => {

    })
  })
  .catch(error => console.log(error))
