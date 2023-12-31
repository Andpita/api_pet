/* eslint-disable func-names */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';

import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import photo from './routes/photo';

const whiteList = [
  "https://pets.andpita.online",
  "https://api-pets.andpita.online",
  "http://localhost:3000",
  "http://localhost:3001",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(delay(500));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/token/', token);
    this.app.use('/alunos/', aluno);
    this.app.use('/fotos/', photo);
  }
}

export default new App().app;
