import { create } from 'zustand';

interface SaveInsightState {
  content: string;
  textHeight: string;
}

interface SaveInsightAction {
  updateInsight: (newContent: string) => void;
  setTextHeight: (height: string) => void;
}

export const useSaveInsight = create<SaveInsightState & SaveInsightAction>(
  (set) => ({
    content: '',
    textHeight: 'auto',
    setTextHeight: (height) =>
      set(() => ({
        textHeight: height,
      })),
    updateInsight: (newContent) =>
      set(() => ({
        content: newContent,
      })),
  }),
);
