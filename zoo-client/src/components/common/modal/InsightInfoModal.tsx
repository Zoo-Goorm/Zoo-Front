'use client';
import { insightChip } from '@/mock/insightChip';
import ChipList from '../chip/ChipList';
import ModalContainer from './Layout/ModalContainer';
import ModalHeader from './Layout/ModalHeader';
import { useRouter } from 'next/navigation';
import Profile from '@/components/insight/information/Profile';
import InsightContent from '@/components/insight/information/InsightContent';
import ReplyEdit from '@/components/insight/information/reply/ReplyEdit';
import ReplyView from '@/components/insight/information/reply/ReplyView';
import InsightHeader from '@/components/insight/information/InsightHeader';
import { content, title, description } from '@/mock/insight-info';

const ModalBody = () => {
  return (
    <div className="flex size-full flex-col gap-16">
      <ChipList type={'subject'} dataList={insightChip} size="l" />
      <InsightHeader title={title} description={description} />
      <Profile />
      <hr className="text-divider-primary" />
      <InsightContent content={content} />
      <hr className="text-divider-primary" />
      <ReplyEdit />
      <ReplyView />
    </div>
  );
};
export default function InsightInfoModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <ModalContainer>
      <ModalHeader
        headerText={'[Name]님 인사이트 노트'}
        closeModal={closeModal}
      />
      <ModalBody />
    </ModalContainer>
  );
}
