'use client';

import {
  DateInfoAccordion,
  Footer,
  NavigationBar,
  RadioContent,
  SessionList,
  Tab,
} from '@/components';
import { SESSION_APPLY_MESSAGES } from '@/constants/messages';
import useModalStore from '@/store/common/useModalStore';
import { useSessionStore } from '@/store/common/useSessionStore';
import { useEffect } from 'react';

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
      <p className="caption-r-12 py-8 text-right text-text-sub">
        {SESSION_APPLY_MESSAGES.radioBody}
      </p>
      <RadioContent />
    </div>
  );
};

const AccordionContainer = () => {
  return (
    <div className="flex w-full gap-16">
      <div className="flex w-[190px] flex-col content-center py-7">
        <hr className="text-divider-primary" />
        <span className="body-m-16 bg-bg-secondary px-24 py-12 text-center text-text-main">
          {SESSION_APPLY_MESSAGES.accordionTitle}
        </span>
        <DateInfoAccordion />
      </div>
      <div className="flex-1">
        <SessionList />
      </div>
    </div>
  );
};

export default function SessionApply() {
  const { isOpen, contents } = useModalStore();
  const { resetDateState } = useSessionStore();

  useEffect(() => {
    resetDateState();
  }, []);

  return (
    <>
      {isOpen && <div className="absolute inset-0 z-50">{contents}</div>}
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
        <Footer />
      </main>
    </>
  );
}
