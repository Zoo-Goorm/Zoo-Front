import { create } from 'zustand';

interface SessionState {
  currentDate: string;
  setCurrentDate: (currentDate: string) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  setCurrentDate: (newDate) =>
    set(() => ({
      currentDate: newDate,
    })),
}));
