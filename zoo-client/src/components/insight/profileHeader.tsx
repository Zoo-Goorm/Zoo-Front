import Image from 'next/image';

interface ProfileHeaderProps {
  name: string;
  time: string;
  edited: boolean;
  role: string;
}

export default function ProfileHeader({
  name,
  time,
  edited,
  role,
}: ProfileHeaderProps) {
  return (
    <div className="flex content-center gap-8">
      <Image
        src="/mock/profile.svg"
        width={24}
        height={24}
        alt="reply-profile"
      />
      <div className="flex items-center justify-center gap-4">
        <span className="body-sb-16 text-text-main">{name}</span>
        <span className="body-r-14 text-text-sub">
          {time}
          {edited && '(수정됨)'}
        </span>
        {role == '강연자' && (
          <span className="body-m-16-150 rounded-md bg-bg-secondary px-2 py-1 text-text-main">
            강연자
          </span>
        )}
      </div>
    </div>
  );
}
