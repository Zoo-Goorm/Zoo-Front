'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { AlertModal, OblongButton, TextField } from '@/components';
import { useState } from 'react';
import useModalStore from '@/store/common/useModalStore';

interface FormData {
  name: string;
  email: string;
  authenticationCode: string;
}

export default function NoneMemberForm() {
  const router = useRouter();
  const [isAuthenticationClicked, setIsAuthenticationClicked] = useState(false);
  const { isOpen, contents, openModal, closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      authenticationCode: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (isSubmitSuccessful) router.push('/session-schedule');
  };

  const handleAuthenticationButton = () => {
    openModal({
      contents: (
        <AlertModal
          headerText="비회원 이메일 인증"
          buttonText="확인"
          onButtonClick={closeModal}
          bodyText={`서비스를 이용하려면 이메일 인증이 필요합니다.\n등록하신 [이메일]로 인증 메일을 발송했으니, 확인 후 인증을 완료해주세요.`}
        />
      ),
    });

    setIsAuthenticationClicked(true);
  };

  const openCancelModal = () => {
    openModal({
      contents: (
        <AlertModal
          headerText="알림"
          buttonText="확인"
          onButtonClick={() => router.push('/login')}
          bodyText="페이지를 나가면 입력하신 정보가 초기화됩니다."
        />
      ),
    });
  };

  return (
    <div className="flex w-[100%] max-w-[77.5rem] flex-col items-center justify-center gap-60">
      <h1 className="website:display-b-48 mobile:headline-sb-32 flex w-[100%] items-start text-text-main">
        비회원 정보 입력
      </h1>
      <form
        className="flex w-[100%] flex-col items-start justify-center gap-36"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          $isRequired
          name="name"
          type="default"
          applyItem="이름"
          placeholder="이름"
          register={register}
          state={errors.name ? 'error' : 'default'}
          rules={{ required: '이름은 필수 입력 항목입니다.' }}
          errorMessage={errors.name?.message}
        />
        <TextField
          $isRequired
          name="email"
          type="default"
          applyItem="이메일"
          placeholder="이메일"
          register={register}
          buttonText="이메일 인증"
          onButtonClick={handleAuthenticationButton}
          state={errors.email ? 'error' : 'default'}
          rules={{ required: '이메일은 필수 입력 항목입니다.' }}
          errorMessage={errors.email?.message}
        />
        <TextField
          readOnly={!isAuthenticationClicked}
          $isRequired
          name="authenticationCode"
          type={isAuthenticationClicked ? 'time' : 'default'}
          applyItem="인증 번호"
          placeholder="인증 번호"
          register={register}
          state={errors.authenticationCode ? 'error' : 'default'}
          rules={{ required: '인증 번호은 필수 입력 항목입니다.' }}
          errorMessage={errors.authenticationCode?.message}
        />
        <span className="body-m-16 w-[100%] text-text-sub">
          본인 확인 절차이며, 다른 용도로 사용되지 않습니다.
        </span>
        <div className="flex w-[100%] items-center gap-3">
          <div className="mobile:w-[9.375rem] website:w-[5.31251rem]">
            <OblongButton
              size="m"
              type="button"
              $buttonStyle="thirary"
              text="취소"
              onClick={openCancelModal}
            />
          </div>
          <div className="mobile:w-[9.375rem] website:w-[11.5625rem]">
            <OblongButton
              size="m"
              type="submit"
              $buttonStyle="primary"
              text="다음"
            />
          </div>
        </div>
      </form>
      {isOpen && contents}
    </div>
  );
}
