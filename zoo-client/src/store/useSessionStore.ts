import { Session } from '@/types/session/session';
import { create } from 'zustand';

export interface SelectSession {
  id: number;
  time: string;
  title: string;
}

interface SessionState {
  currentDate: string;
  sessionDates: string[];
  currentSession: Session;
  selectedSessionsByDate: Record<string, SelectSession[]>;

  setCurrentSession: (newData: Session) => void;
  setCurrentDate: (currentDate: string) => void;
  addSessionDate: (newDate: string) => void;
  addSelectedSession: (newSession: { date: string } & SelectSession) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDates: ['전체'],
  currentSession: {
    id: 0,
    title: '',
    keyword: [],
    description: '',
    percentage: 0,
    location: '',
    speaker: { name: '', info: '' },
  },
  selectedSessionsByDate: {},

  setCurrentDate: (newDate) => set({ currentDate: newDate }),
  setCurrentSession: (newSession: Session) =>
    set({ currentSession: newSession }),

  addSessionDate: (newDate) =>
    set((state) => ({
      sessionDates: state.sessionDates.includes(newDate)
        ? state.sessionDates
        : [...state.sessionDates, newDate],
    })),

  addSelectedSession: (newSession) =>
    set((state) => {
      const { date, ...sessionData } = newSession;

      const currentSessions = state.selectedSessionsByDate[date] || [];

      const isDuplicate = currentSessions.some(
        (session) => session.id === sessionData.id,
      );

      if (!isDuplicate) {
        return {
          selectedSessionsByDate: {
            ...state.selectedSessionsByDate,
            [date]: [...currentSessions, sessionData],
          },
        };
      }

      return state;
    }),
}));
