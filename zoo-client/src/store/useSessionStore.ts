import { create } from 'zustand';

interface SessionState {
  currentDate: string;
  sessionDate: string[];
  setCurrentDate: (currentDate: string) => void;
  addSessionsDate: (date: string) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDate: ['전체'],
  setCurrentDate: (newDate) =>
    set(() => ({
      currentDate: newDate,
    })),
  addSessionsDate: (date) =>
    set((state) => ({
      sessionDate: state.sessionDate.includes(date)
        ? state.sessionDate
        : [...state.sessionDate, date],
    })),
}));
