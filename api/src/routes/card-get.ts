import express from 'express';

import { cardGetService } from '../services/card.service';

const router = express.Router();
router.get('/', cardGetService);
export { router as cardGetRouter };
