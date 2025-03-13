import { create } from 'zustand';

interface RadioState {
  activeState: 'active' | 'inactive';
  setActiveState: (activeState: 'active' | 'inactive') => void;
}

export const useRadioStore = create<RadioState>((set) => ({
  activeState: 'active',
  setActiveState: (status) =>
    set(() => ({
      activeState: status,
    })),
}));
