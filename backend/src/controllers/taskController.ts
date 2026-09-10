import type { Request, Response, NextFunction } from 'express';
import { listCategoriesWithContent } from '../services/taskService';

export async function getGuideData(_req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await listCategoriesWithContent();
    res.json({ categories });
  } catch (error) {
    next(error);
  }
}
