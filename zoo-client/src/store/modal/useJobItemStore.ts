import { create } from 'zustand';

interface JobItemState {
  selectedJobTitle: string | null;
  selectedJob: string[];
}

interface JobItemAction {
  setSelectedJobTitle: (jobTitle: string | null) => void;
  setSelectedJob: (jobs: string[]) => void;
  toggleJobSelect: (jobPosition: string) => void;
}

const useJobItemStore = create<JobItemState & JobItemAction>((set) => ({
  selectedJobTitle: null,
  selectedJob: [],

  setSelectedJobTitle: (jobTitle) => set({ selectedJobTitle: jobTitle }),
  setSelectedJob: (jobs) => set({ selectedJob: jobs }),

  toggleJobSelect: (jobPosition) =>
    set((state) => {
      if (state.selectedJob.includes(jobPosition)) {
        return {
          selectedJob: state.selectedJob.filter(
            (selectedJob) => selectedJob !== jobPosition,
          ),
        };
      }

      return { selectedJob: [state.selectedJob[0] || '', jobPosition] };
    }),
}));

export default useJobItemStore;
