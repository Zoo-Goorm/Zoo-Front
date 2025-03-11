import { create } from 'zustand';

export interface SelectSession {
  id: number;
  time: string;
  title: string;
}

interface SessionState {
  currentDate: string;
  sessionDates: string[];
  selectedSessionsByDate: Record<string, SelectSession[]>;

  setCurrentDate: (currentDate: string) => void;
  addSessionDate: (newDate: string) => void;
  addSelectedSession: (newSession: { date: string } & SelectSession) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDates: ['전체'],
  selectedSessionsByDate: {},

  setCurrentDate: (newDate) => set({ currentDate: newDate }),

  addSessionDate: (newDate) =>
    set((state) => ({
      sessionDates: state.sessionDates.includes(newDate)
        ? state.sessionDates
        : [...state.sessionDates, newDate],
    })),

  addSelectedSession: (newSession) =>
    set((state) => {
      const { date, ...sessionData } = newSession;

      return {
        selectedSessionsByDate: {
          ...state.selectedSessionsByDate,
          [date]: [...(state.selectedSessionsByDate[date] || []), sessionData],
        },
      };
    }),
}));
