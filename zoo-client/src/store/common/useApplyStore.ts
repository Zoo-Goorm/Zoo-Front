import { create } from 'zustand';

interface SessionState {
  apply: boolean;
  messageMain: string;
  messageSub: string;
  sessionId: number | null;
  change: boolean;
  modalType: 'primary' | 'thirary';
  setModalType: (modalType: 'primary' | 'thirary') => void;
  setApplyState: (
    apply: boolean,
    messageMain: string,
    messageSub: string,
    id: number,
    change: boolean,
  ) => void;
  resetState: () => void;
}

export const useApplyStore = create<SessionState>((set) => ({
  apply: false,
  messageMain: '',
  messageSub: '',
  sessionId: null,
  change: false,
  modalType: 'primary',
  setModalType: (modalType: 'primary' | 'thirary') => set({ modalType }),
  setApplyState: (
    apply: boolean,
    messageMain: string,
    messageSub: string,
    id: number,
    change: boolean,
  ) =>
    set({
      apply,
      messageMain,
      messageSub,
      sessionId: id,
      change,
    }),
  resetState: () =>
    set({
      apply: false,
      messageMain: '',
      messageSub: '',
      sessionId: null,
      change: false,
    }),
}));
