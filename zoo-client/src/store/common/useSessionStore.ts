import { SelectSession } from '@/types/session/session';
import { create } from 'zustand';

interface SessionState {
  currentDate: string;
  currentSessionId: number;
  currentTime: string;
  sessionDates: string[];
  selectedSessionsByDate: Record<string, SelectSession[]>;

  setCurrentSessionId: (newId: number) => void;
  setCurrentDate: (newDate: string) => void;
  setCurrentTime: (currentTime: string) => void;
  addSessionDate: (newDate: string) => void;
  addSelectedSession: (
    newSession: { currentDate: string } & SelectSession,
  ) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDates: ['전체'],
  currentTime: '',
  currentSessionId: 0,
  selectedSessionsByDate: {},

  setCurrentSessionId: (newId) => set({ currentSessionId: newId }),
  setCurrentDate: (newDate) => set({ currentDate: newDate }),
  setCurrentTime: (newTime) => set({ currentTime: newTime }),
  addSessionDate: (newDate) =>
    set((state) => ({
      sessionDates: state.sessionDates.includes(newDate)
        ? state.sessionDates
        : [...state.sessionDates, newDate],
    })),

  addSelectedSession: (newSession) =>
    set((state) => {
      const { currentDate, ...sessionData } = newSession;
      const currentSessions = state.selectedSessionsByDate[currentDate] || [];
      const isChanged = currentSessions.some(
        (session) => session.time === sessionData.time,
      );

      if (!isChanged) {
        return {
          ...state,
          selectedSessionsByDate: {
            ...state.selectedSessionsByDate,
            [currentDate]: [...currentSessions, sessionData],
          },
        };
      } else {
        return {
          ...state,
          selectedSessionsByDate: {
            ...state.selectedSessionsByDate,
            [currentDate]: currentSessions.map((session) =>
              session.time === sessionData.time ? sessionData : session,
            ),
          },
        };
      }
    }),
}));
