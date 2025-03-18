'use client';

import ModalButton from './Layout/ModalButton';
import ModalContainer from './Layout/ModalContainer';
import ModalHeader from './Layout/ModalHeader';
import { Badge, ChipList, JobItem } from '@/components';
import { JOB } from '@/constants/register';
import { IModalProps } from '@/types/modal/modal';
import useJobItemStore from '@/store/modal/useJobItemStore';
import useModalStore from '@/store/common/useModalStore';

function ModalBody() {
  const {
    selectedJobTitle,
    selectedJob,
    setSelectedJobTitle,
    setSelectedJob,
    toggleJobSelect,
  } = useJobItemStore();

  const handleJobSelect = (jobKey: string) => {
    setSelectedJobTitle(jobKey);
    setSelectedJob([jobKey]);
  };

  return (
    <div className="flex w-[100%] flex-col items-start justify-center gap-16">
      <ChipList type="register" size="s" dataList={selectedJob} />
      <div className="flex w-full items-center gap-16">
        <section className="flex h-[13.875rem] w-1/2 flex-1 flex-col items-start gap-16 p-0">
          <Badge text="직군" type="default" />
          <div className="scrollbar-hidden flex h-[11.3125rem] w-[100%] flex-col gap-1 overflow-auto">
            {Object.keys(JOB).map((job, index) => (
              <JobItem
                key={index}
                text={job}
                type="job"
                toggleJob={() => handleJobSelect(job)}
                selectedJobs={selectedJob}
              />
            ))}
          </div>
        </section>
        <section className="flex h-[13.875rem] w-1/2 flex-1 flex-col items-start gap-16 p-0">
          <Badge text="직업" type="default" />
          <div className="scrollbar-hidden flex h-[11.3125rem] w-[100%] flex-col gap-1 overflow-auto">
            {selectedJobTitle &&
              JOB[selectedJobTitle as keyof typeof JOB].map((job, index) => (
                <JobItem
                  key={index}
                  text={job}
                  type="interest"
                  toggleJob={toggleJobSelect}
                  selectedJobs={selectedJob}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function JobModal({ onButtonClick }: IModalProps) {
  const { selectedJob } = useJobItemStore();
  const { closeModal } = useModalStore();

  const handleSubmit = () => {
    onButtonClick(selectedJob);
  };

  return (
    <ModalContainer>
      <ModalHeader headerText="직군/직업 선택" closeModal={closeModal} />
      <ModalBody />
      <ModalButton onButtonClick={handleSubmit} buttonText="선택 완료" />
    </ModalContainer>
  );
}
