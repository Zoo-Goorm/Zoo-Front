import { DateInfoAccordion } from '@/app/components/index';
export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <DateInfoAccordion date={'3월 10일 (DAY N)'} />
    </div>
  );
}
