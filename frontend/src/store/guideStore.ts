import { create } from 'zustand';

type GuideState = {
  completedTaskIds: string[];
  toggleTaskDone: (taskId: string) => void;
};

export const useGuideStore = create<GuideState>((set) => ({
  completedTaskIds: [],
  toggleTaskDone: (taskId) =>
    set((state) => ({
      completedTaskIds: state.completedTaskIds.includes(taskId)
        ? state.completedTaskIds.filter((id) => id !== taskId)
        : [...state.completedTaskIds, taskId]
    }))
}));
