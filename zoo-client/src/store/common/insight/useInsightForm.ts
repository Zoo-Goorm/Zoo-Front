import { create } from 'zustand';

interface FormState {
  images: File[] | null;
  vote: string[] | null;
}

interface FormAction {
  setImages: (newImage: File[]) => void;
  setVote: (newVoteItem: string[]) => void;
  resetVote: () => void;
  resetImages: () => void;
}

const initialForm: FormState = {
  images: null,
  vote: null,
};

export const useInsightFormStore = create<FormState & FormAction>((set) => ({
  ...initialForm,
  setVote: (newVoteItem) =>
    set((state) => {
      return { vote: [...(state?.vote || []), ...newVoteItem] };
    }),
  setImages: (newImage) =>
    set((state) => {
      return { images: [...(state?.images || []), ...newImage] };
    }),
  resetVote: () =>
    set(() => {
      return { images: null };
    }),
  resetImages: () =>
    set(() => {
      return { images: null };
    }),
}));
