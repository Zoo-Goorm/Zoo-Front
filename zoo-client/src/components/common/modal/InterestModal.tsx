import { Badge, JobItem } from '@/components';

import ChipList from '../chip/ChipList';
import ModalContainer from './Layout/ModalContainer';
import ModalButton from './Layout/ModalButton';
import ModalHeader from './Layout/ModalHeader';

import useInterestItemStore from '@/store/modal/useInterestItemStore';
import { INTEREST_IN_IT } from '@/constants/register';
import { IModalProps } from '@/types/modal/modal';
import useModalStore from '@/store/common/useModalStore';

function ModalBody() {
  const { selectedInterests, toggleInterest } = useInterestItemStore();

  return (
    <div className="flex w-[100%] flex-col items-start justify-center gap-16">
      <ChipList type="register" size="s" dataList={selectedInterests} />
      <div className="flex h-[13.875rem] flex-1 flex-col items-start gap-16">
        <Badge text="관심있는 IT 분야" type="default" />
        <div className="scrollbar-hidden flex h-[11.3125rem] flex-col gap-1 overflow-auto">
          {INTEREST_IN_IT.map((interest, index) => (
            <JobItem
              type="interest"
              key={index}
              text={interest}
              selectedJobs={selectedInterests}
              toggleJob={toggleInterest}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InterestModal({ onButtonClick }: IModalProps) {
  const { selectedInterests } = useInterestItemStore();
  const { closeModal } = useModalStore();

  const handleSubmit = () => {
    onButtonClick(selectedInterests);
  };

  return (
    <ModalContainer>
      <ModalHeader headerText="Interest in IT" closeModal={closeModal} />
      <ModalBody />
      <ModalButton onButtonClick={handleSubmit} buttonText="선택 완료" />
    </ModalContainer>
  );
}
