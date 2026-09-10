import { Router } from 'express';
import { getGuideData } from '../controllers/taskController';

const router = Router();

router.get('/categories', getGuideData);

export default router;
