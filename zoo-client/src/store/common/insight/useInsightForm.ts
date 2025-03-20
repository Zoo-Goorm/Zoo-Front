import { create } from 'zustand';

interface FormState {
  images: File[] | null;
  vote: string[] | null;
}

interface FormAction {
  setImages: (newImage: File[]) => void;
  setVote: () => void;
  editVoteItem: (index: number, value: string) => void;
  removeVoteItem: () => void;
  removeImageItem: (index: number) => void;
  addVoteItem: () => void;
  resetVote: () => void;
  resetImages: () => void;
}

const initialForm: FormState = {
  images: null,
  vote: null,
};

export const useInsightFormStore = create<FormState & FormAction>((set) => ({
  ...initialForm,
  setVote: () =>
    set(() => {
      return { vote: ['', ''] };
    }),
  addVoteItem: () =>
    set((state) => {
      const updateVote = [...(state?.vote || [])];
      updateVote.push('');
      return { vote: updateVote };
    }),
  editVoteItem: (index, value) =>
    set((state) => {
      const updateVote = [...(state?.vote || [])];
      updateVote[index] = value;
      return { vote: [...updateVote] };
    }),
  removeVoteItem: () =>
    set((state) => {
      const updateVote = [...(state?.vote || [])];
      updateVote.pop();
      return { vote: updateVote };
    }),
  removeImageItem: (index) =>
    set((state) => {
      const updateImages = state!.images!.filter((_, idx) => idx !== index);
      return { images: updateImages };
    }),
  setImages: (newImage) =>
    set((state) => {
      return { images: [...(state?.images || []), ...newImage] };
    }),
  resetVote: () =>
    set(() => {
      return { vote: null };
    }),
  resetImages: () =>
    set(() => {
      return { images: null };
    }),
}));
