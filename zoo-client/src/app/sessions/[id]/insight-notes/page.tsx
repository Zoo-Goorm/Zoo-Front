'use client';
import {
  Footer,
  Video,
  InsightForm,
  NavigationBar,
  SessionInfo,
  NoteList,
  InsightNoteTab,
  AnotherInsightCard,
  InsightSideNavigationBar,
} from '@/components';
import { useSession } from '@/hook/session/useSession';
// import { useSessionInsight } from '@/hook/session/useSessionInsights';
import { notes } from '@/mock/NoteList';
import { ISessionId } from '@/types/session/session';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

function AnotherInsightSection() {
  const router = useRouter();

  return (
    <section className="flex gap-3">
      <div className="flex max-w-[35.8125rem] flex-col">
        <h3 className="title-sb-20 px-16 text-text-main">
          타 세션 인사이트 노트
        </h3>
        <div className="flex flex-col items-center justify-center gap-16">
          <AnotherInsightCard />
          <AnotherInsightCard />
        </div>
        <button
          onClick={() => router.push('/insight-notes')}
          className="body-sb-16 rounded-md bg-bg-thirary px-16 py-12 text-text-primary"
        >
          더 구경하러 가기
        </button>
      </div>
    </section>
  );
}

function InsightSection() {
  return (
    <section className="flex w-[100%] flex-col items-center justify-center gap-40 p-0">
      <div className="flex w-[100%] items-center justify-between bg-bg-secondary px-20 py-16">
        <h3 className="title-sb-20 text-text-main">인사이트 노트 NN개</h3>
        <InsightNoteTab />
      </div>
      {/* <div className="mobile:grid-1 grid flex-wrap gap-x-24 gap-y-[1.5rem] website:grid-cols-3">
        {Object.keys(insightList).map((key) => {
          const insight = insightList[Number(key)];
          return <GeneralInsightCard key={key} insights={insight} />;
        })}
      </div> */}
    </section>
  );
}

const SessionInsightInfo = ({ currentSession }: ISessionId) => {
  return (
    <div className="py-32">
      <SessionInfo currentSession={currentSession} />
      <div className="flex items-center gap-2">
        <Image
          src="/mock/profile.svg"
          alt="session-profile"
          height={48}
          width={48}
        />
        <span className="title-sb-20 text-text-main">
          {currentSession.speakerName}
        </span>
        <span className="body-m-16-150 text-text-sub">
          {currentSession.careers[0]}
        </span>
      </div>
    </div>
  );
};

export default function SessionInsightNotes() {
  const id = useParams().id as string;
  const { data: session } = useSession(id);

  return (
    <main>
      <NavigationBar />
      <InsightSideNavigationBar />
      <div className="my-14 flex w-full justify-center gap-20">
        <div className="flex max-w-[924px] flex-col items-start justify-center">
          <Video />
          {session && <SessionInsightInfo currentSession={session} />}
          <InsightSection />
          <InsightForm type="insight" />
          <NoteList noteList={notes} />
        </div>
        <AnotherInsightSection />
      </div>
      <Footer />
    </main>
  );
}
