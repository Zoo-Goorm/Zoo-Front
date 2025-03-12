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
import { subjectList } from '@/mock/chip';
import { sessionsDetailed } from '@/mock/sessionsDetailed';
import { ISessions } from '@/types/session/session';

const Title = () => {
  return (
    <section className="flex flex-col gap-40">
      <h1 className="display-b-60 leading-none text-text-main">
        {SESSION_SCHEDULE_MESSAGES.title}
      </h1>
      <div className="flex flex-col gap-24">
        <p className="title-sb-24 leading-normal text-text-sub">
          {SESSION_SCHEDULE_MESSAGES.titleBody}
        </p>
        <PurchaseButton size={48} text={SESSION_SCHEDULE_MESSAGES.buttonText} />
      </div>
    </section>
  );
};

const SessionAccordion = () => {
  return (
    <Accordion text="키워드로 세션 찾기">
      <ChipList subjectList={subjectList} />
    </Accordion>
  );
};

export default function SessionSchedulePage() {
  const sessionList: ISessions = sessionsDetailed;

  return (
    <main className="flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="m-[100px] flex w-full max-w-[1240px] flex-col gap-40">
        <Title />
        <SessionAccordion />
        <Tab sessionList={sessionList} />
        <SessionList />
      </div>
    </main>
  );
}
