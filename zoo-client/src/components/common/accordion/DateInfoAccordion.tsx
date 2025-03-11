'use client';
import { useSessionStore } from '@/store/useSessionStore';
import DateInfoList from './DateInfoList';
import PaymentButton from '../button/PaymentButton';

export default function DateInfoAccordion() {
  const { selectedSessionsByDate, sessionDates } = useSessionStore();

  return (
    <div>
      {sessionDates.slice(1, 3).map((date, index) => (
        <DateInfoList
          key={index}
          title={`${date} (Day ${index + 1})`}
          items={selectedSessionsByDate[date] || []}
        />
      ))}
      <PaymentButton />
    </div>
  );
}
