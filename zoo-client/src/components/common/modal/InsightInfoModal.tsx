'use client';
import ChipList from '../chip/ChipList';
import ModalHeader from './Layout/ModalHeader';
import { useRouter } from 'next/navigation';
import {
  InsightContent,
  InsightHeader,
  Profile,
  ReplyEdit,
  ReplyView,
} from '@/components';
import { InsightDetailed } from '@/mock/insightDetailed';

const ModalBody = () => {
  const { title, description, keywords, content, profile } = InsightDetailed;

  return (
    <div className="flex size-full flex-col gap-16">
      <ChipList type={'subject'} dataList={keywords} size="l" />
      <InsightHeader title={title} description={description} />
      <Profile profile={profile} />
      <InsightContent content={content} />
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
    <div className="flex w-screen flex-col items-center justify-center py-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[868px] bg-bg-primary px-32 py-20"
      >
        <ModalHeader
          headerText={'[Name]님 인사이트 노트'}
          closeModal={closeModal}
        />
        <ModalBody />
      </div>
    </div>
  );
}
