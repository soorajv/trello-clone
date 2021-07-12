import express from 'express';

import { listGetService } from '../services/list.service';

const router = express.Router();
router.get('/', listGetService);
export { router as listGetRouter };
