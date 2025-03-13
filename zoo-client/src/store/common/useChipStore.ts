import { create } from 'zustand';

interface IChipStore {
  selectedChips: Set<string>;
  toggleChip: (text: string) => void;
}

export const useChipStore = create<IChipStore>((set) => ({
  selectedChips: new Set(),
  toggleChip: (text) =>
    set((state) => {
      const selectedChips = new Set(state.selectedChips);

      if (selectedChips.has(text)) selectedChips.delete(text);
      else selectedChips.add(text);

      return { selectedChips };
    }),
}));
