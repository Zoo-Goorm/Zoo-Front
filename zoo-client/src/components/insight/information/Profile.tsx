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

  return (
    <div className="flex justify-between gap-2">
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
        <LikeToggle size="l" likeCount={likeCount} />
      </div>
    </div>
  );
}
