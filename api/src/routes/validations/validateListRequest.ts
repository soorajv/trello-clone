import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import { RequestValidationError } from '../../errors/request-validation-error';

const saveSchema = Joi.object({
  name: Joi.string()
    .max(30)
    .regex(/^\w+(?:\s+\w+)*$/)
    .required(),
  boardId: Joi.string().alphanum().max(50).required(),
});

const getByBoardSchema = Joi.object({
  boardId: Joi.string().alphanum().max(50).required(),
});
export const validateListPostRequest = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const vResult = saveSchema.validate(req.body, { abortEarly: false });

    if (vResult.error) {
      throw new RequestValidationError(vResult.error);
    }
    next();
  };
};

export const validateListGetByBoardRequest = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const vResult = getByBoardSchema.validate(req.query, { abortEarly: false });

    if (vResult.error) {
      throw new RequestValidationError(vResult.error);
    }
    next();
  };
};
