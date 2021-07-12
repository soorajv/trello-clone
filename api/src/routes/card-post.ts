import express from 'express';

import { validatecardPostRequest } from './validations/validateCardRequest';

import { cardPostService } from '../services/card.service';

const router = express.Router();
router.post('/', validatecardPostRequest(), cardPostService);
export { router as cardPostRouter };
