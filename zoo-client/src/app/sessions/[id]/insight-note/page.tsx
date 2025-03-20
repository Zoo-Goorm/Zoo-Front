'use client';
import {
  Footer,
  Video,
  InsightForm,
  NavigationBar,
  SessionInfo,
  ReplyView,
} from '@/components';
import { session } from '@/mock/session';
import Image from 'next/image';

const CardContainer = () => {
  return (
    <div className="h-[579px] w-[259px] bg-bg-badge-subject">
      여기는 카드 컨테이너입니다
    </div>
  );
};

const SessionInsightInfo = () => {
  return (
    <div className="py-32">
      <SessionInfo session={session} />
      <div className="flex items-center gap-2">
        <Image
          src="/mock/profile.svg"
          alt="session-profile"
          height={48}
          width={48}
        />
        <span className="title-sb-20 text-text-main">연사 이름</span>
        <span className="body-m-16-150 text-text-sub">연사 정보</span>
      </div>
    </div>
  );
};

export default function SessionInsightNotes() {
  return (
    <main>
      <NavigationBar />
      <div className="flex justify-center gap-20 py-20">
        <div className="flex max-w-[924px] flex-col items-start justify-center">
          <Video />
          <SessionInsightInfo />
          <InsightForm type="insight" />
          <ReplyView />
        </div>
        <CardContainer />
      </div>
      <Footer />
    </main>
  );
}
