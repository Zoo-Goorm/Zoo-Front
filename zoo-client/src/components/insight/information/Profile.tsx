import ChipList from '@/components/common/chip/ChipList';
import Image from 'next/image';
import SocialList from './SocialList';
import LikeToggle from '@/components/common/toggle/LikeToggle';
import { InfoListProps, IProfile } from '@/types/insight/insightProfile';

const InfoList = ({ name, email }: InfoListProps) => {
  return (
    <>
      <span className="title-sb-20 leading-none text-text-main">{name}</span>
      <span className="text-text-sub">{email}</span>
    </>
  );
};

export default function Profile({ profile }: IProfile) {
  const { name, email, keywords, social } = profile;

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
          <ChipList type="subject" size="l" dataList={keywords} />
          <SocialList social={social} />
        </div>
      </div>
      <LikeToggle size="l" count={1} />
    </div>
  );
}
