'use client';
import {
  Footer,
  Video,
  InsightForm,
  NavigationBar,
  SessionInfo,
  Tab,
  PopularInsightCard,
  NoteList,
} from '@/components';
import { useSessions } from '@/hook/session/useSession';
import { notes } from '@/mock/NoteList';
import { session } from '@/mock/session';
import Image from 'next/image';

function PopularInsightSection() {
  return (
    <section className="flex">
      <div className="flex max-w-[35.8125rem] flex-col gap-40">
        <h3 className="headline-sb-28 px-16 py-0 text-text-main">
          타 세션 인사이트 노트
        </h3>
        <div className="flex flex-col items-center justify-center gap-16">
          <PopularInsightCard $direction="vertical" />
          <PopularInsightCard $direction="vertical" />
        </div>
      </div>
    </section>
  );
}

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
  const { data: sessions } = useSessions();

  return (
    <main>
      <NavigationBar />
      <div className="flex justify-center gap-20 py-20">
        <div className="flex max-w-[924px] flex-col items-start justify-center">
          <Video />
          <SessionInsightInfo />
          <Tab sessionList={sessions} />
          <InsightForm type="insight" />
          <NoteList noteList={notes} />
        </div>
        <PopularInsightSection />
      </div>
      <Footer />
    </main>
  );
}
