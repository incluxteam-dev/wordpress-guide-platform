import type { Category } from '../types/guide';
import { api } from './api';

export async function fetchGuideData(): Promise<Category[]> {
  const response = await api.get<{ categories: Category[] }>('/tasks/categories');
  return response.data.categories;
}
