'use client';
import ModalHeader from './Layout/ModalHeader';
import { useParams, useRouter } from 'next/navigation';
import {
  CardBadge,
  InsightContent,
  InsightForm,
  InsightHeader,
  Profile,
  ReplyList,
} from '@/components';
import Image from 'next/image';
import { IInsightDetailed } from '@/types/insight/insight';
import { useInsightsDetailed } from '@/hook/insights/useInsights';

const ModalBody = ({ InsightDetailed }: IInsightDetailed) => {
  const { id, name, shortDescription, keywords, memo, profile, likeCount } =
    InsightDetailed;

  return (
    <div className="flex size-full flex-col gap-16">
      <CardBadge keyword={keywords} />
      <InsightHeader title={name} description={shortDescription} />
      <Profile profile={profile} likeCount={likeCount} />
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
        className="w-[868px] bg-bg-primary px-32 py-20"
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
