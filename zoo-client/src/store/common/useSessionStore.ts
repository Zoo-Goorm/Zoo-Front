import { SelectSession, Session } from '@/types/session/session';
import { create } from 'zustand';

interface SessionState {
  currentDate: string;
  sessionDates: string[];
  currentSession: Session;
  selectedSessionsByDate: Record<string, SelectSession[]>;

  setCurrentSession: (newData: Session) => void;
  setCurrentDate: (currentDate: string) => void;
  addSessionDate: (newDate: string) => void;
  addSelectedSession: (
    newSession: { currentDate: string } & SelectSession,
  ) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentDate: '전체',
  sessionDates: ['전체'],
  currentSession: {
    id: 0,
    name: '',
    keywords: [],
    shortDescription: '',
    speakerImageUrl: null,
    maxCapacity: 0,
    participantCount: 0,
    startTime: '',
    endTime: '',
    timeRange: '',
    location: '',
    status: '',
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
