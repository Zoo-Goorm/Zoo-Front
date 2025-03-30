import Image from 'next/image';

interface ProfileHeaderProps {
  name: string;
  time?: string;
  edited: boolean;
  speaker?: boolean;
}

export default function ProfileHeader({
  name,
  time,
  edited,
  speaker,
}: ProfileHeaderProps) {
  return (
    <div className="flex content-center gap-8">
      <Image
        onClick={() => {}}
        src="/mock/profile.svg"
        width={24}
        height={24}
        alt="reply-profile"
      />
      <div className="flex items-center justify-center gap-4">
        <span className="body-sb-16 text-text-main">{name}</span>
        <span className="body-r-14 text-text-sub">
          {time} {time !== '' && edited && `(수정됨)`}
        </span>
        {speaker && (
          <span className="body-m-16-150 rounded-md bg-bg-secondary px-2 py-1 text-text-main">
            강연자
          </span>
        )}
      </div>
    </div>
  );
}
