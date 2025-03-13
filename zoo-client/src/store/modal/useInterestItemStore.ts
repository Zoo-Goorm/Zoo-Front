import { create } from 'zustand';

interface InterestItemState {
  selectedInterests: string[];
}

interface InterestItemAction {
  toggleInterest: (Interest: string) => void;
}

const useInterestItemStore = create<InterestItemState & InterestItemAction>(
  (set) => ({
    selectedInterests: [],
    toggleInterest: (job) =>
      set((state) => {
        const { selectedInterests } = state;

        if (selectedInterests.includes(job)) {
          return {
            selectedInterests: selectedInterests.filter((j) => j !== job),
          };
        }

        if (selectedInterests.length < 5) {
          return { selectedInterests: [...selectedInterests, job] };
        }

        return state;
      }),
  }),
);

export default useInterestItemStore;
