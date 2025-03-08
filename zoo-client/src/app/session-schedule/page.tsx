import {
  PurchaseButton,
  NavigationBar,
  Accordion,
  ChipList,
  Tab,
  SessionList,
} from '@/components';

import { subjectList } from '@/mock/chip';

const Title = () => {
  return (
    <section className="flex flex-col gap-40">
      <h1 className="display-b-60 leading-none text-text-main">전체 세션</h1>
      <div className="flex flex-col gap-24">
        <p className="title-sb-24 leading-normal text-text-sub">
          컨퍼런스 참가권 구매 시 모든 세션이 신청이 가능합니다.
          <br />* 같은 시간대 세션은 중복 신청이 불가하오니 이점 확인해 주시길
          바랍니다.
        </p>
        <PurchaseButton />
      </div>
    </section>
  );
};

const SessionAccordion = () => {
  return (
    <Accordion date="Day 1">
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
