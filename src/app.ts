import express, { Express, Request, Response } from 'express';
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-express'
var morgan = require('morgan')

import  loadContainer  from "./container";

const app: Express = express()
// const app = express();
// const app:express.Application = express()

app.use(express.json())
app.use(morgan('dev'))

loadContainer(app);

app.use(loadControllers(
  'controllers/*.ts',
  { cwd: __dirname }
  ));
  

export { app };

