import { create } from 'zustand';

interface ToggleState {
  toggleState: boolean;
  setToggleState: (activeState: boolean) => void;
}

export const useToggleStore = create<ToggleState>((set) => ({
  toggleState: false,
  setToggleState: (status) =>
    set(() => ({
      toggleState: status,
    })),
}));
