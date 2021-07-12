import { Request, Response, NextFunction } from 'express';

import { Board } from '../models/board';
import { BadRequestError } from '../errors/bad-request-error';

export const boardPostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, userId } = req.body;

  const existingBoard = await Board.findOne({ name });

  if (existingBoard) {
    throw new BadRequestError('Board already exists');
  }

  const board = Board.build({ name, userId });
  await board.save();

  return res.status(201).send(board);
};

export const boardGetService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const boards = await Board.find();

  return res.status(200).send(boards);
};
