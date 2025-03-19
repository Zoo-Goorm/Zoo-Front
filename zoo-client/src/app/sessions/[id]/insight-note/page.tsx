'use client';
import { Footer, NavigationBar, SessionInfo } from '@/components';
import { session } from '@/mock/session';

const ImbedView = () => {
  return <div className="h-[160px] bg-text-primary">ddfddsfdsf</div>;
};

export default function SessionInsightNotes() {
  return (
    <main>
      <NavigationBar />
      <div className="flex items-center gap-20">
        <div className="flex max-w-[530px] flex-col items-start justify-center bg-fill-primary">
          <ImbedView />
          <SessionInfo session={session} />
        </div>
        <div className="h-[579px] w-[259px] bg-bg-badge-subject">
          여기는 카드 컨테이너입니다
        </div>
      </div>
      <Footer />
    </main>
  );
}
