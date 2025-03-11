import { DateInfo } from '@/mock/date';

export default function DateInfoList({ date }: { date: string }) {
  return (
    <div className="flex flex-col gap-20 bg-bg-primary px-4">
      {DateInfo.filter((info) => info.date === date).map((info, index) => (
        <div key={index} className="flex flex-col gap-20 self-stretch">
          <span className="figure-m-10">{info.time}</span>
          <span className="body-r-14">{info.title}</span>
        </div>
      ))}
    </div>
  );
}
