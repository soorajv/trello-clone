import express from 'express';

import { validateBoardPostRequest } from './validations/validateBoardRequest';

import { boardPostService } from '../services/board.service';

const router = express.Router();
router.post('/', validateBoardPostRequest(), boardPostService);
export { router as boardPostRouter };
