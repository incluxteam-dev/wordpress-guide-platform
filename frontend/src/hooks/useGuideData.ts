import { useEffect, useState } from 'react';
import type { Category } from '../types/guide';
import { fetchGuideData } from '../services/guideService';

type GuideDataState = {
  categories: Category[];
  loading: boolean;
  error: string | null;
};

export function useGuideData(): GuideDataState {
  const [state, setState] = useState<GuideDataState>({
    categories: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    fetchGuideData(controller.signal)
      .then((categories) => {
        if (!active) return;
        setState({ categories, loading: false, error: null });
      })
      .catch((error: unknown) => {
        if (!active) return;
        const isCancelled =
          typeof error === 'object' &&
          error !== null &&
          'name' in error &&
          (error.name === 'CanceledError' || error.name === 'AbortError');

        if (isCancelled) {
          return;
        }

        setState({
          categories: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Erro ao carregar dados'
        });
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return state;
}
