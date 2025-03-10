'use client';
import { SelectSession, useSessionStore } from '@/store/useSessionStore';
import DateInfoList from './DateInfoList';
import { useEffect, useState } from 'react';

interface AccordionItem {
  date: string;
  title: string;
  items: SelectSession[];
}

export default function DateInfoAccordion() {
  const { selectedSessions, sessionDates } = useSessionStore();

  const [accordionData, setAccordionData] = useState<AccordionItem[]>([
    {
      date: sessionDates[1],
      title: sessionDates[1]
        ? `${sessionDates[1]} (Day 1)`
        : '날짜 없음 (Day 1)',
      items: [],
    },
    {
      date: sessionDates[2],
      title: sessionDates[2]
        ? `${sessionDates[2]} (Day 2)`
        : '날짜 없음 (Day 2)',
      items: [],
    },
  ]);

  useEffect(() => {
    if (selectedSessions.length === 0) return;

    const lastSession = selectedSessions[selectedSessions.length - 1];

    setAccordionData((prevData) =>
      prevData.map((section) =>
        section.date === lastSession.date
          ? { ...section, items: [...section.items, lastSession] } // ✅ 이제 `items`는 항상 `SelectSession[]` 타입
          : section,
      ),
    );
  }, [selectedSessions]);

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
