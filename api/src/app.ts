import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cors from 'cors';
import { appRoutes } from './routes';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(cors());
app.use(json());

app.use(appRoutes);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
