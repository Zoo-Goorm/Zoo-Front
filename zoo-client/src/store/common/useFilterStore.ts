import { create } from 'zustand';

interface IFilterStore {
  selectedInsights: Set<number>;
  setSelectedInsights: (id: number) => void;
}

export const useFilterStore = create<IFilterStore>((set) => ({
  selectedInsights: new Set(),
  setSelectedInsights: (id) =>
    set((state) => {
      const selectedInsights = new Set(state.selectedInsights);

      if (selectedInsights.has(id)) selectedInsights.delete(id);
      else selectedInsights.add(id);

      return { selectedInsights };
    }),
}));
