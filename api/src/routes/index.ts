import express from 'express';

import { boardPostRouter } from './board-post';

import { listPostRouter } from './list-post';

import { boardGetRouter } from './board-get';

import { listGetRouter } from './list-get';
import { listGetByBoardRouter } from './lists-get-by-board';

import { cardPostRouter } from './card-post';
import { cardGetRouter } from './card-get';

class AppRoutes {
  public router: express.Router = express.Router();
  constructor() {
    this.config();
  }
  private config(): void {
    this.router.use('/v1/board', boardPostRouter);
    this.router.use('/v1/board', boardGetRouter);
    this.router.use('/v1/list', listPostRouter);
    this.router.use('/v1/list', listGetRouter);
    this.router.use('/v1/list-by-board', listGetByBoardRouter);
    this.router.use('/v1/card', cardPostRouter);
    this.router.use('/v1/card', cardGetRouter);
  }
}
export const appRoutes = new AppRoutes().router;
