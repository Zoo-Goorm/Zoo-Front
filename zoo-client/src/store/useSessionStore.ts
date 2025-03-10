import { create } from 'zustand';

export interface SelectSession {
  id: number;
  date: string;
  time: string;
  title: string;
}

interface SessionState {
  currentDate: string;
  sessionDates: string[];
  selectedSessions: SelectSession[];
  setCurrentDate: (currentDate: string) => void;
  addSessionDate: (newDate: string) => void;
  addSelectedSession: (newSession: SelectSession) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDates: ['전체'],
  selectedSessions: [],

  setCurrentDate: (newDate) => set({ currentDate: newDate }),

  addSessionDate: (newDate) =>
    set((state) => ({
      sessionDates: state.sessionDates.includes(newDate)
        ? state.sessionDates
        : [...state.sessionDates, newDate],
    })),

  addSelectedSession: (newSession) =>
    set((state) => {
      const isDuplicate = state.selectedSessions.some(
        (session) => session.id === newSession.id,
      );

      return {
        selectedSessions: isDuplicate
          ? state.selectedSessions
          : [...state.selectedSessions, newSession],
      };
    }),
}));
