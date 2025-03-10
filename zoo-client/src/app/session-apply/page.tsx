'use client';

import { NavigationBar, Radio, SessionList, Tab } from '@/components';
import { SESSION_APPLY_MESSAGES } from '@/constants/messages';

const Title = () => {
  return (
    <p className="display-b-48 text-center leading-normal text-text-main">
      {SESSION_APPLY_MESSAGES.title}
    </p>
  );
};

const RadioContainer = () => {
  return (
    <div className="flex size-full flex-col">
      <span className="caption-r-12 py-8 text-right text-text-sub">
        {SESSION_APPLY_MESSAGES.radioBody}
      </span>
      <div className="flex justify-between">
        <Radio status="active" />
        <Radio status="inactive" />
      </div>
    </div>
  );
};

const AccordionContainer = () => {
  return (
    <div className="flex size-full gap-16">
      <div className="flex w-[190px] flex-col content-center justify-center bg-fill-active">
        <hr className="flex text-text-sub" />
        <span className="body-m-16 px-24 py-12 text-center text-text-main">
          관심 있는 IT 세션
        </span>
        <hr className="flex text-text-sub" />
        <div>DateInfo-Day1이 들어갈 자리</div>
        <hr className="flex text-text-sub" />
        <div>DateInfo-Day2이 들어갈 자리</div>
      </div>
      <SessionList />
    </div>
  );
};

export default function SessionApply() {
  return (
    <main className="flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="m-[100px] flex size-full max-w-[1240px] flex-col gap-80">
        <div className="flex flex-col gap-52">
          <Title />
          <RadioContainer />
        </div>
        <div className="flex flex-col gap-60">
          <Tab />
          <AccordionContainer />
        </div>
      </div>
    </main>
  );
}
