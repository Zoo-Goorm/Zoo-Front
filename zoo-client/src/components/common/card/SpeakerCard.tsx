import Image from 'next/image';
import SubjectBadge from '../badge/SubjectBadge';
import { ISpeakerCardContent } from '@/mock/onboarding';

interface ISpeakerCardProps {
  content: ISpeakerCardContent;
}

export default function SpeakerCard({ content }: ISpeakerCardProps) {
  return (
    <div className="flex items-center rounded-[0.25rem]">
      <Image
        src="/mock/speaker-img.svg"
        alt="임시 이미지"
        width={200}
        height={300}
        style={{ width: '12.5rem', height: '18.75rem', objectFit: 'cover' }}
      />
      <div className="flex h-[18.75rem] w-[16rem] gap-[0.625rem] bg-bg-secondary p-24">
        <div className="flex flex-1 flex-col items-start justify-between">
          <div className="flex flex-col items-start gap-12">
            <span className="title-sb-18 text-text-main">{content.title}</span>
            <SubjectBadge subject={content.keywords} />
          </div>
          <div className="flex flex-col items-start justify-center gap-12">
            <span className="body-m-14 text-text-main">{content.time}</span>
            <span className="body-m-14 text-text-main">
              {content.displayName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
