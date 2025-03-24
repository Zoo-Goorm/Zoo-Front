'use client';
import ChipList from '../chip/ChipList';
import ModalHeader from './Layout/ModalHeader';
import { useRouter } from 'next/navigation';
import {
  InsightContent,
  InsightForm,
  InsightHeader,
  Profile,
  ReplyList,
} from '@/components';
import { InsightDetailed } from '@/mock/insightDetailed';
import Image from 'next/image';
import { IInsightDetailed } from '@/types/insight/insight';

const ModalBody = ({ InsightDetailed }: IInsightDetailed) => {
  const { title, description, keywords, content, profile } = InsightDetailed;

  return (
    <div className="flex size-full flex-col gap-16">
      <ChipList type={'subject'} dataList={keywords} size="l" />
      <InsightHeader title={title} description={description} />
      <Profile profile={profile} />
      <InsightContent content={content} />
      <div className="flex items-center gap-1">
        <Image
          height={24}
          width={24}
          src="/mock/reply-icon.svg"
          alt="reply-icon"
        />
        <span className="body-r-14 text-text-sub">답글</span>
      </div>
      <InsightForm type="reply" />
      <ReplyList />
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
          headerText={`[${InsightDetailed.profile.name}]님 인사이트 노트`}
          closeModal={closeModal}
        />
        <ModalBody InsightDetailed={InsightDetailed} />
      </div>
    </div>
  );
}
