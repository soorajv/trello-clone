import express from 'express';

import { boardGetService } from '../services/board.service';

const router = express.Router();
router.get('/', boardGetService);
export { router as boardGetRouter };
