'use client';
import DateInfoList from './DateInfoList';
import PaymentButton from '../button/PaymentButton';
import { useSessionStore } from '@/store/common/useSessionStore';

export default function DateInfoAccordion() {
  const { selectedSessionsByDate, sessionDates } = useSessionStore();

  console.log(selectedSessionsByDate);
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
