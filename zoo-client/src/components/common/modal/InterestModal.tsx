import { Badge, JobItem } from '@/components';

import ChipList from '../chip/ChipList';
import ModalContainer from './Layout/ModalContainer';
import ModalButton from './Layout/ModalButton';
import ModalHeader from './Layout/ModalHeader';

import useJobItemStore from '@/store/useJobItemStore';
import { INTEREST_IN_IT } from '@/constants/register';

interface IInterestModal {
  onButtonClick: (selectedJobs: string[]) => void;
}

function ModalBody() {
  const { selectedJobs } = useJobItemStore();

  return (
    <div className="flex w-[100%] flex-col items-start justify-center gap-16">
      <ChipList type="register" size="s" dataList={selectedJobs} />
      <div className="flex h-[13.875rem] flex-1 flex-col items-start gap-16">
        <Badge text="관심있는 IT 분야" type="default" />
        <div className="flex h-[11.3125rem] flex-col gap-1 overflow-auto scrollbar-hidden">
          {INTEREST_IN_IT.map((interest, index) => (
            <JobItem type="interest" key={index} text={interest} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InterestModal({ onButtonClick }: IInterestModal) {
  const { selectedJobs } = useJobItemStore();

  const handleSubmit = () => {
    onButtonClick(selectedJobs);
  };

  return (
    <ModalContainer>
      <ModalHeader headerText="Interest in IT" />
      <ModalBody />
      <ModalButton onButtonClick={handleSubmit} buttonText="선택 완료" />
    </ModalContainer>
  );
}
