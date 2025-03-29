import { OblongButton, UserLabel } from '@/components';
import { IUserProfile } from '@/services/profile';

interface IUserProfileProps {
  profile: IUserProfile;
  onSaveButtonClick: () => void;
}

export default function UserProfile({
  profile,
  onSaveButtonClick,
}: IUserProfileProps) {
  return (
    <div className="flex w-[100%] flex-1 flex-col justify-center gap-32">
      <UserLabel label="이름" value={profile.name} />
      <UserLabel label="닉네임" value={profile.nickname} />
      <UserLabel label="이메일 주소" value={profile.email} />
      <UserLabel label="전화번호" value={profile.phoneNumber} />
      <UserLabel
        label="직군/직업"
        value={`${profile.occupation}/${profile.job}`}
      />
      <UserLabel label="관심있는 IT 분야" value={profile.interestCategory} />
      <UserLabel label="네트워킹 연동" value={profile.snsUrl} />
      <div className="flex w-[100%] justify-center">
        <div className="w-[12.5rem] pt-80">
          <OblongButton
            onClick={onSaveButtonClick}
            type="submit"
            text="수정하기"
            $buttonStyle="primary"
            size="l"
            iconVisible={false}
          />
        </div>
      </div>
    </div>
  );
}
