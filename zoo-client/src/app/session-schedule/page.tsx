'use client';
import {
  PurchaseButton,
  NavigationBar,
  Accordion,
  ChipList,
  Tab,
  SessionList,
} from '@/components';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
import useTitleAccess from '@/hooks/access/useTitleAccess';
import { useKeywords } from '@/hooks/session/useKeywords';
import { useSessions } from '@/hooks/session/useSession';

const Title = () => {
  const { hide, handler } = useTitleAccess();

  return (
    <section className="flex flex-col gap-40">
      <h1 className="display-b-60 leading-none text-text-main">
        {SESSION_SCHEDULE_MESSAGES.title}
      </h1>
      <div className="flex flex-col gap-24">
        <p className="title-sb-24 leading-normal text-text-sub">
          {SESSION_SCHEDULE_MESSAGES.titleBody}
        </p>
        {!hide && (
          <PurchaseButton
            func={handler}
            size={48}
            text={SESSION_SCHEDULE_MESSAGES.buttonText}
          />
        )}
      </div>
    </section>
  );
};

const SessionAccordion = () => {
  const { data: subjectList = [] } = useKeywords();
  return (
    <Accordion text="키워드로 세션 찾기">
      <ChipList dataList={subjectList} size={'l'} type={'subject'} />
    </Accordion>
  );
};

export default function SessionSchedulePage() {
  const { data: sessions } = useSessions();

  return (
    <main className="flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="m-[100px] flex w-full max-w-[1240px] flex-col gap-40">
        <Title />
        <SessionAccordion />
        <Tab sessionList={sessions} />
        <SessionList />
      </div>
    </main>
  );
}
