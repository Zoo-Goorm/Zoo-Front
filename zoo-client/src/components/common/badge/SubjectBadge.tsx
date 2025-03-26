import { Badge } from '@/components';

interface ISubjectBadge {
  subject: string[];
}

export default function SubjectBadge({ subject }: ISubjectBadge) {
  return (
    <div className="flex w-[100%] flex-wrap items-center gap-x-4 gap-y-[0.25rem]">
      {subject.map((badge, index) => (
        <Badge $size="s" key={index} text={badge} type="subject" />
      ))}
    </div>
  );
}
