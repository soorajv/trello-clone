import express from 'express';

import { listGetServiceByBoard } from '../services/list.service';
import { validateListGetByBoardRequest } from './validations/validateListRequest';
const router = express.Router();
router.get('/', validateListGetByBoardRequest(), listGetServiceByBoard);
export { router as listGetByBoardRouter };
