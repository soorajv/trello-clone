import express from 'express';

import { validateListPostRequest } from './validations/validateListRequest';

import { listPostService } from '../services/list.service';

const router = express.Router();
router.post('/', validateListPostRequest(), listPostService);
export { router as listPostRouter };
