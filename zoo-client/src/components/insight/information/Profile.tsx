import Image from 'next/image';
import SocialList from './SocialList';
import { InfoListProps, IProfile } from '@/types/insight/insightProfile';
import CardBadge from '@/components/common/badge/CardBadge';
import { ILikeCount } from '@/types/insight/insight';
import LikeToggle from '@/components/common/toggle/LikeToggle';

const InfoList = ({ name, email }: InfoListProps) => {
  return (
    <>
      <span className="title-sb-20 leading-none text-text-main">{name}</span>
      <span className="text-text-sub">{email}</span>
    </>
  );
};

export default function Profile({ profile, likeCount }: IProfile & ILikeCount) {
  const { name, email, interestCategory, linkUrls } = profile;

  console.log(profile);
  return (
    <div className="flex items-end justify-between">
      <div className="flex gap-16 py-16">
        <Image
          src={'/mock/profile.svg'}
          alt="profile-img"
          height={100}
          width={100}
        />
        <div className="flex flex-col gap-3">
          <InfoList name={name} email={email} />
          <CardBadge keyword={interestCategory} />
          <div className="flex w-full justify-between">
            <SocialList linkUrls={linkUrls} />
            <LikeToggle size="l" likeCount={likeCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
