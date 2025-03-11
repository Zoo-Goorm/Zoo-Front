import { create } from 'zustand';

interface JobItemState {
  selectedJobs: string[];
}

interface JobItemAction {
  toggleJob: (job: string) => void;
}

const useJobItemStore = create<JobItemState & JobItemAction>((set) => ({
  selectedJobs: [],
  toggleJob: (job) =>
    set((state) => {
      const { selectedJobs } = state;

      if (selectedJobs.includes(job)) {
        return { selectedJobs: selectedJobs.filter((j) => j !== job) };
      }

      if (selectedJobs.length < 5) {
        return { selectedJobs: [...selectedJobs, job] };
      }

      return state;
    }),
}));

export default useJobItemStore;
