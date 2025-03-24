// import { create } from 'zustand';

// interface FormState {
//   images: File[] | null;
//   vote: string[] | null;
//   anonStatus: string; // 익명 여부
//   publicStatus: string; // 공개 여부
// }

// interface FormAction {
//   setImages: (newImage: File[]) => void;
//   setVote: () => void;
//   editVoteItem: (index: number, value: string) => void;
//   removeVoteItem: () => void;
//   removeImageItem: (index: number) => void;
//   addVoteItem: () => void;
//   resetVote: () => void;
//   resetImages: () => void;
//   setAnonStatus: (status: string) => void; // 익명 여부 상태 수정
//   setPublicStatus: (status: string) => void; // 공개 여부 상태 수정
// }

// const initialForm: FormState = {
//   images: null,
//   vote: null,
//   anonStatus: '실명', // 기본값
//   publicStatus: '공개', // 기본값
// };

// export const useInsightFormStore = create<FormState & FormAction>((set) => ({
//   ...initialForm,
//   setVote: () =>
//     set(() => {
//       return { vote: ['', ''] };
//     }),
//   addVoteItem: () =>
//     set((state) => {
//       const updateVote = [...(state?.vote || [])];
//       updateVote.push('');
//       return { vote: updateVote };
//     }),
//   editVoteItem: (index, value) =>
//     set((state) => {
//       const updateVote = [...(state?.vote || [])];
//       updateVote[index] = value;
//       return { vote: [...updateVote] };
//     }),
//   removeVoteItem: () =>
//     set((state) => {
//       const updateVote = [...(state?.vote || [])];
//       updateVote.pop();
//       return { vote: updateVote };
//     }),
//   removeImageItem: (index) =>
//     set((state) => {
//       const updateImages = state!.images!.filter((_, idx) => idx !== index);
//       return { images: updateImages };
//     }),
//   setImages: (newImage) =>
//     set((state) => {
//       return { images: [...(state?.images || []), ...newImage] };
//     }),
//   resetVote: () =>
//     set(() => {
//       return { vote: null };
//     }),
//   resetImages: () =>
//     set(() => {
//       return { images: null };
//     }),
//   // 익명여부, 공개여부 상태 관리
//   setAnonStatus: (status: string) => set({ anonStatus: status }),
//   setPublicStatus: (status: string) => set({ publicStatus: status }),
// }));
