import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import { RequestValidationError } from '../../errors/request-validation-error';

const schema = Joi.object({
  text: Joi.string()
    .max(200)
    .regex(/^\w+(?:\s+\w+)*$/)
    .required(),
  listId: Joi.string().alphanum().max(50).required(),
});

export const validatecardPostRequest = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const vResult = schema.validate(req.body, { abortEarly: false });

    if (vResult.error) {
      throw new RequestValidationError(vResult.error);
    }
    next();
  };
};
