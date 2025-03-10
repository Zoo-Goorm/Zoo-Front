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

const Title = () => {
  return (
    <section className="flex flex-col gap-40">
      <h1 className="display-b-60 leading-none text-text-main">전체 세션</h1>
      <div className="flex flex-col gap-24">
        <p className="title-sb-24 leading-normal text-text-sub">
          {SESSION_SCHEDULE_MESSAGES.title}
        </p>
        <PurchaseButton />
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
  return (
    <main className="flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="m-[100px] flex w-full max-w-[1240px] flex-col gap-40">
        <Title />
        <SessionAccordion />
        <div className="flex flex-col">
          <Tab />
          <SessionList />
        </div>
      </div>
    </main>
  );
}
