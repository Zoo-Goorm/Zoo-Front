import Image from 'next/image';
import SocialList from './SocialList';
import { InfoListProps, ProfileProps } from '@/types/insight/insightProfile';
import CardBadge from '@/components/common/badge/CardBadge';
import { ILike } from '@/types/insight/insight';
import LikeToggle from '@/components/common/toggle/LikeToggle';

const InfoList = ({ name, email }: InfoListProps) => {
  return (
    <>
      <span className="title-sb-20 leading-none text-text-main">{name}</span>
      <span className="text-text-sub">{email}</span>
    </>
  );
};

interface IProfileProps {
  id?: number;
  type: 'detailed' | 'profile';
  likeCount?: ILike['likeCount'];
  isLiked?: ILike['isLiked'];
  profile: ProfileProps;
}

export default function Profile({
  id,
  profile,
  likeCount,
  isLiked,
  type,
}: IProfileProps) {
  const { name, email, interestCategory, linkUrls } = profile;

  return (
    <div
      className={`flex w-full justify-between gap-2 ${name === '알 수 업음' && 'hidden'} `}
    >
      <div className="flex gap-3">
        <Image
          src={'/mock/profile.svg'}
          alt="profile-img"
          height={100}
          width={100}
        />
        <div className="flex w-[500px] flex-col gap-3 py-16">
          <InfoList name={name} email={email} />
          <CardBadge keyword={interestCategory} />
          <div className="flex w-full justify-between">
            <SocialList linkUrls={linkUrls} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-end">
        {type == 'detailed' && (
          <LikeToggle
            id={id}
            size="l"
            likeCount={likeCount}
            isLiked={isLiked}
          />
        )}
      </div>
    </div>
  );
}
