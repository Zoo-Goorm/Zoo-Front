import Image from 'next/image';
import ProfileModal from '../common/modal/ProfileModal';
import useModalStore from '@/store/common/useModalStore';
import { ProfileProps } from '@/types/insight/insightProfile';

interface ProfileHeaderProps {
  name: string;
  isAnonymous?: boolean;
  time?: string;
  edited: boolean;
  speaker?: boolean;
  profile?: ProfileProps;
}

export default function ProfileHeader({
  profile,
  name,
  time,
  edited,
  speaker,
}: ProfileHeaderProps) {
  const { openModal } = useModalStore();

  const openProfileModal = () => {
    openModal({
      contents: profile && <ProfileModal profile={profile} />,
    });
  };

  return (
    <div className="flex content-center gap-8">
      <Image
        onClick={openProfileModal}
        src="/mock/profile.svg"
        className="cursor-pointer"
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
