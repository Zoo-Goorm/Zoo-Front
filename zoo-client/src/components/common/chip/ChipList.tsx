import Chip from './Chip';

interface IChipListProps {
  subjectList: string[];
}

export default function ChipList({ subjectList }: IChipListProps) {
  return (
    <div className="flex w-[100%] flex-wrap content-center items-center gap-x-12 gap-y-[0.75rem]">
      {subjectList.map((subject, index) => (
        <Chip key={index} text={subject} />
      ))}
    </div>
  );
}
