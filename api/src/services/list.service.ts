import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { List } from '../models/list';
import { BadRequestError } from '../errors/bad-request-error';

export const listPostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, boardId } = req.body;

  const existingList = await List.findOne({ name, boardId });

  if (existingList) {
    throw new BadRequestError('List already exists');
  }

  const list = List.build({ name, boardId });
  await list.save();

  return res.status(201).send(list);
};

export const listGetService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const lists = await List.find();

  return res.status(200).send(lists);
};

export const listGetServiceByBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const boardId = req.query.boardId;
  List.aggregate([
    { $match: { boardId: boardId } },
    {
      $project: {
        _id: { $toString: '$_id' },
        title: '$name',
      },
    },

    {
      $lookup: {
        from: 'cards',
        let: { listId: '$_id' },
        pipeline: [
          { $match: { $expr: { $eq: ['$listId', '$$listId'] } } },
          { $project: { _id: '$_id', text: '$text' } },
        ],
        as: 'cards',
      },
    },
  ]).exec((err, lists) => {
    res.send(lists);
    if (err) throw err;
  });
};
