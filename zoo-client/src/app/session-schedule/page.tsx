'use client';

import {
  PurchaseButton,
  NavigationBar,
  Accordion,
  ChipList,
  Tab,
  Session,
} from '@/components';

import { badgeList } from '@/mock/badge';
import { subjectList } from '@/mock/chip';
import { speakerInfo } from '@/mock/speaker';
import { useSessionStore } from '@/store/useSessionStore';

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

const SessionComponent = () => {
  const speakerList = speakerInfo;
  return (
    <div className="flex flex-col">
      <div className="flex gap-20">
        <Session badgeList={badgeList} speakerList={speakerList} />
      </div>
    </div>
  );
};

const SessionList = ({ currentDate }: { currentDate: string }) => {
  return (
    <div className="flex flex-col">
      <Tab />
      <span className="headline-sb-28 py-7 text-text-primary">
        {currentDate}
      </span>
      <hr className="text-text-sub" />
      <SessionComponent />
      <hr className="text-text-sub" />
      <SessionComponent />
      <hr className="text-text-sub" />
      <SessionComponent />
      <hr className="text-text-sub" />
      <SessionComponent />
      <hr className="text-text-sub" />
      <SessionComponent />
    </div>
  );
};

export default function SessionSchedulePage() {
  const { currentDate } = useSessionStore();

  return (
    <main className="flex flex-col items-center bg-bg-primary">
      {/* Header */}
      <NavigationBar />
      {/* body */}
      <div className="m-[100px] flex w-full max-w-[1240px] flex-col gap-40">
        <Title />
        <SessionAccordion />
        <SessionList currentDate={currentDate} />
      </div>
    </main>
  );
}
