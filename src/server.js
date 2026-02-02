import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getEnvVar } from './utils/getEnvVar.js';
import itemRouter from './routers/routers.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { routeNotFound } from './middlewares/routeNotFound.js';

dotenv.config();
  const PORT = Number(getEnvVar("PORT", "4561"));

export const startServer = () => {
const app = express();
app.use(express.json());
app.use(cors());
app.use(itemRouter);
app.use(routeNotFound);
app.use(errorHandler);
  app.listen(PORT, () => console.log( `server has already started on port ${PORT}'`));
};

