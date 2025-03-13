import Chip from './Chip';

interface IChipListProps {
  type: 'subject' | 'register';
  size: 's' | 'l';
  dataList: string[];
}

export default function ChipList({ dataList, size, type }: IChipListProps) {
  const chipListTypeClasses = {
    subject: 'gap-x-12 gap-y-[0.75rem]',
    register: 'gap-8',
  };

  return (
    <div
      className={`flex w-[100%] flex-wrap items-center justify-start ${chipListTypeClasses[type]}`}
    >
      {dataList.map((data, index) => (
        <Chip size={size} key={index} text={data} />
      ))}
    </div>
  );
}
