'use client';
import ModalHeader from './Layout/ModalHeader';
import { useParams, useRouter } from 'next/navigation';
import {
  Badge,
  InsightContent,
  InsightForm,
  InsightHeader,
  Profile,
  ReplyList,
} from '@/components';
import Image from 'next/image';
import { IInsightDetailed } from '@/types/insight/insight';
import { useInsightsDetailed } from '@/hooks/insights/useInsights';

const ModalBody = ({ InsightDetailed }: IInsightDetailed) => {
  const {
    id,
    name,
    shortDescription,
    keywords,
    memo,
    profile,
    likeCount,
    isLiked,
  } = InsightDetailed;

  return (
    <div className="flex size-full flex-col gap-16">
      <div className="flex w-[100%] flex-wrap items-center gap-x-12 gap-y-[0.75rem]">
        {keywords?.map((badge, index) => (
          <Badge key={index} type={'subject'} text={badge} />
        ))}
      </div>
      <InsightHeader title={name} description={shortDescription} />
      <Profile
        id={id}
        profile={profile}
        likeCount={likeCount}
        isLiked={isLiked}
      />
      <InsightContent memo={memo} />
      <div className="flex items-center gap-1">
        <Image
          height={24}
          width={24}
          src="/mock/reply-icon.svg"
          alt="reply-icon"
        />
        <span className="body-r-14 text-text-sub">답글</span>
      </div>
      <InsightForm type="reply" id={id} />
      <ReplyList id={id} />
    </div>
  );
};
export default function InsightInfoModal() {
  const id = useParams().id;
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  const { data: InsightDetailed } = useInsightsDetailed(Number(id));

  return (
    <div className="flex w-screen flex-col items-center justify-center py-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex min-h-[1000px] w-[868px] flex-col gap-5 bg-bg-primary px-32 py-20"
      >
        <ModalHeader
          headerText={`[${InsightDetailed?.profile.name}]님 인사이트 노트`}
          closeModal={closeModal}
        />
        {InsightDetailed && <ModalBody InsightDetailed={InsightDetailed} />}
      </div>
    </div>
  );
}
