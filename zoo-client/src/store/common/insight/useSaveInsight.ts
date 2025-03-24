import { create } from 'zustand';

interface SaveInsightState {
  content: string;
}

interface SaveInsightAction {
  updateInsight: (newContent: string) => void;
}

export const useSaveInsight = create<SaveInsightState & SaveInsightAction>(
  (set) => ({
    content: '',
    updateInsight: (newContent) =>
      set(() => ({
        content: newContent,
      })),
  }),
);
