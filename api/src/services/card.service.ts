import { Request, Response, NextFunction } from 'express';

import { Card } from '../models/card';

export const cardPostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text, listId } = req.body;

  const card = Card.build({ text, listId });
  await card.save();

  return res.status(201).send(card);
};

export const cardGetService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cards = await Card.find();

  return res.status(200).send(cards);
};
