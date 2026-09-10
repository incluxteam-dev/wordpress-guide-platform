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

    fetchGuideData()
      .then((categories) => {
        if (!active) return;
        setState({ categories, loading: false, error: null });
      })
      .catch((error: unknown) => {
        if (!active) return;
        setState({
          categories: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Erro ao carregar dados'
        });
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
}
