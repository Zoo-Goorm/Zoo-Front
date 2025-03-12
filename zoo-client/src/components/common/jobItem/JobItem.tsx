import useJobItemStore from '@/store/useJobItemStore';
import Image from 'next/image';

interface IJobItemProps {
  type: 'interest' | 'job';
  text: string;
}

export default function JobItem({ text, type }: IJobItemProps) {
  const { selectedJobs, toggleJob } = useJobItemStore();
  const isSelectedJobItem = selectedJobs.includes(text);

  return (
    <div className="flex h-[1.75rem] w-[100%] items-center justify-between px-0 py-4">
      <label
        onClick={() => toggleJob(text)}
        className={`${isSelectedJobItem ? 'text-text-primary-pressed' : 'text-text-main'}`}
      >
        {text}
      </label>
      {type === 'job' && (
        <Image
          src="/jobItem/right-arrow.svg"
          alt="right arrow"
          width={20}
          height={20}
        />
      )}
    </div>
  );
}
