'use client';
import { useSessionStore } from '@/store/useSessionStore';
import DateInfoList from './DateInfoList';
import { useEffect } from 'react';
import sessionInfo from '@/mock/session';

export default function DateInfoAccordion() {
  const { selectedSessions, sessionDate } = useSessionStore();

  useEffect(() => {
    console.log(sessionInfo);
  }, [selectedSessions]);

  const accordionData = [
    {
      title: `${sessionDate[1]} (Day 1)`,
      items: [],
    },
    {
      title: `${sessionDate[2]} (Day 2)`,
      items: [],
    },
  ];

  return (
    <>
      {accordionData.map((accordion, index) => (
        <DateInfoList
          key={index}
          title={accordion.title}
          items={accordion.items}
        />
      ))}
    </>
  );
}
