import { create } from 'zustand';

interface SessionState {
  apply: boolean;
  messageMain: string;
  messageSub: string;
  change: boolean;
  conflictId: number;
  modalType: 'primary' | 'thirary';
  setConflictId: (id: number) => void;
  setModalType: (modalType: 'primary' | 'thirary') => void;
  setApplyState: (
    apply: boolean,
    messageMain: string,
    messageSub: string,
    change: boolean,
  ) => void;
  resetState: () => void;
}

export const useApplyStore = create<SessionState>((set) => ({
  apply: false,
  messageMain: '',
  messageSub: '',
  conflictId: 0,
  change: false,
  modalType: 'primary',
  setModalType: (modalType: 'primary' | 'thirary') => set({ modalType }),
  setApplyState: (
    apply: boolean,
    messageMain: string,
    messageSub: string,
    change: boolean,
  ) =>
    set({
      apply,
      messageMain,
      messageSub,
      change,
    }),
  setConflictId: (id) =>
    set(() => ({
      conflictId: id,
    })),
  resetState: () =>
    set({
      apply: false,
      messageMain: '',
      messageSub: '',
      change: false,
    }),
}));
