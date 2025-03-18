import ChipList from '@/components/common/chip/ChipList';
import Image from 'next/image';
import SocialList from './SocialList';
import LikeToggle from './LikeToggle';
import { InfoListProps } from '@/types/insight/insight';

const InfoList = ({ name, email }: InfoListProps) => {
  return (
    <>
      <span className="title-sb-20 leading-none text-text-main">{name}</span>
      <span className="text-text-sub">{email}</span>
    </>
  );
};

export default function Profile() {
  const list = ['직군', '직업', '관심분야', '관심분야', '관심분야', '관심분야'];

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
          <InfoList name={'Name'} email={'Sample@sample.com'} />
          <ChipList type="subject" size="l" dataList={list} />
          <SocialList />
        </div>
      </div>
      <LikeToggle />
    </div>
  );
}
