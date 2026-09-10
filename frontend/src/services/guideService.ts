import type { Category } from '../types/guide';
import { api } from './api';

export async function fetchGuideData(signal?: AbortSignal): Promise<Category[]> {
  const response = await api.get<{ categories: Category[] }>('/tasks/categories', {
    signal
  });
  return response.data.categories;
}
