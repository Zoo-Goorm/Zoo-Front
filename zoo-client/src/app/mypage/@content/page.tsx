'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import UserProfileForm from '@/components/mypage/UserProfileForm';
import { ContentAgree } from '@/components';
import { USER_TERMS } from '@/constants/messages';
import { fetchWithdraw } from '@/services/auth';
import UserProfile from '@/components/mypage/UserProfile';
import { useProfile } from '@/hooks/profile/useProfile';
import { deleteCookie } from 'cookies-next';
import useAuthStore from '@/store/common/auth/useAuthStore';

function UserProfileSection() {
  const [isEditing, setIsEditing] = useState(true);
  const { data: userProfile } = useProfile();

  const handleEditButton = () => {
    setIsEditing((prev) => !prev);
  };

  const account = userProfile?.username.includes('@')
    ? '비회원'
    : userProfile?.username.split(' ')[0] === 'kakako'
      ? '카카오'
      : '구글';

  return (
    <section className="flex flex-col items-start justify-center gap-48">
      <div className="flex flex-col items-start gap-8">
        <h3 className="headline-sb-36 text-text-main">내 정보</h3>
        <span className="body-m-16 text-text-sub">
          참여 경험을 최적화하기 위해 필수 정보를 입력해 주세요.
        </span>
      </div>
      <div className="flex h-[5rem] w-[100%] items-center justify-center border-t-2 border-solid bg-bg-secondary stroke-stroke-quaternary">
        <span className="title-sb-20 flex-1 text-center text-text-main">
          {account} 계정으로 로그인되었습니다.
        </span>
      </div>
      <div className="flex flex-col justify-center gap-[0.375rem] self-stretch">
        <Image
          src="/avatar/Ellipse.svg"
          alt="프로필 이미지"
          width={150}
          height={150}
        />
        <div className="flex items-center justify-end gap-[0.125rem]">
          <p className="body-m-14 text-text-important">*</p>
          <p className="body-m-14 text-text-sub">필수 입력 항목</p>
        </div>
        {isEditing ? (
          <UserProfileForm onSaveButtonClick={handleEditButton} />
        ) : (
          userProfile && (
            <UserProfile
              onSaveButtonClick={handleEditButton}
              profile={userProfile}
            />
          )
        )}
      </div>
    </section>
  );
}

function AgreementSection() {
  return (
    <section className="flex flex-col items-start gap-40">
      <div className="flex flex-col gap-8 px-0 py-[0.5rem]">
        <h4 className="title-sb-20 text-text-main">
          개인정보 처리에 관한 동의
        </h4>
        <span className="caption-r-12 text-text-sub">
          ※ 필수 약관은 서비스 이용을 위해 이미 동의 처리되었습니다.
        </span>
      </div>
      <div className="flex flex-col items-start gap-36">
        <ContentAgree
          isRequired="필수"
          title="개인정보 수집 및 이용 동의"
          terms={USER_TERMS.collection}
        />
        <ContentAgree
          isRequired="필수"
          title="개인정보 제 3자 제공에 대한 동의"
          terms={USER_TERMS.provide}
        />
        <ContentAgree
          isRequired="선택"
          title="마케팅 정보 활용 동의"
          terms={USER_TERMS.marketing}
        />
      </div>
    </section>
  );
}

function WithdrawSection() {
  const router = useRouter();

  const handleWithdraw = async () => {
    try {
      await fetchWithdraw();
      localStorage.clear();
      deleteCookie('Authorization');

      useAuthStore.setState({
        isAuthenticated: false,
        userToken: null,
        userType: 'none',
      });

      router.push('/');
    } catch (error) {
      console.error(`회원 탈퇴에 실패했습니다. ${error}`);
    }
  };

  return (
    <section className="flex flex-col items-start gap-[1.0625rem]">
      <h4 className="title-sb-18 text-text-main">회원 탈퇴</h4>
      <div className="flex w-[100%] flex-col items-center justify-center rounded-[0.25rem] bg-bg-secondary px-24 py-16">
        <div className="flex w-[100%] items-center justify-between rounded-[0.25rem] bg-bg-primary">
          <div className="flex flex-1 items-center justify-between px-24 py-8">
            <span className="body-m-16 text-text-main">
              계정 삭제 시 프로필 정보가 삭제됩니다.
            </span>
            <div>
              <button
                onClick={handleWithdraw}
                className="body-m-16 flex items-center justify-center border-none p-8 text-text-main"
              >
                회원 탈퇴
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MyPage() {
  return (
    <div className="flex w-[64.375rem] flex-col items-center justify-center gap-[6.25rem]">
      <div className="flex w-[100%] flex-col justify-center gap-80">
        <UserProfileSection />
        <AgreementSection />
        <WithdrawSection />
      </div>
    </div>
  );
}
