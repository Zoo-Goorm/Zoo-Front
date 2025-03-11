'use client';

import { create } from 'zustand';

interface ModalAction {
  openModal: (props: OpenModalProps) => void;
  closeModal: () => void;
}

interface ModalState {
  isOpen: boolean;
  contents: React.ReactNode;
}

type OpenModalProps = Pick<ModalState, 'contents'>;

const initialModalState: ModalState = {
  isOpen: false,
  contents: null,
};

const useModalStore = create<ModalState & ModalAction>((set) => ({
  ...initialModalState,

  openModal: (props: OpenModalProps) =>
    set((state) => {
      if (state.isOpen) return state;
      return { isOpen: true, ...props };
    }),

  closeModal: () =>
    set((state) => {
      if (!state.isOpen) return state;
      return { ...initialModalState };
    }),
}));

export default useModalStore;
