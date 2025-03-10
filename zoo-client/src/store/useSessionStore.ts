import { create } from 'zustand';

interface SessionState {
  currentDate: string;
  sessionDate: string[];
  selectedSessions: number[];
  setSelectedSessions: (newSession: number) => void;
  setCurrentDate: (currentDate: string) => void;
  addSessionsDate: (newDate: string) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDate: ['전체'],
  selectedSessions: [],
  setCurrentDate: (newDate) =>
    set(() => ({
      currentDate: newDate,
    })),
  addSessionsDate: (newDate) =>
    set((state) => ({
      sessionDate: state.sessionDate.includes(newDate)
        ? state.sessionDate
        : [...state.sessionDate, newDate],
    })),
  setSelectedSessions: (newSession) =>
    set((state) => ({
      selectedSessions: state.selectedSessions.includes(newSession)
        ? state.selectedSessions
        : [...state.selectedSessions, newSession],
    })),
}));
