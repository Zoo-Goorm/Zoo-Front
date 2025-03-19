import { create } from 'zustand';

interface InsightNoteTabState {
  selectedTab: string;
}

interface InsightNoteTabAction {
  toggleTab: (label: string) => void;
}

const useInsightNoteTabStore = create<
  InsightNoteTabState & InsightNoteTabAction
>((set) => ({
  selectedTab: '최신순',
  toggleTab: (label) =>
    set((state) => ({
      selectedTab: state.selectedTab === label ? '' : label,
    })),
}));

export default useInsightNoteTabStore;
