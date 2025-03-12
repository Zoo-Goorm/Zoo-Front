'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import useModalStore from '@/store/common/useModalStore';
import { SESSION_TERMS } from '@/constants/messages';

import {
  InterestModal,
  AlertModal,
  TextField,
  CheckBox,
  PaymentButton,
  JobModal,
} from '@/components';
import RegisterButton from './RegisterButton';

interface FormData {
  name: string;
  phone: string;
  email: string;
  job: string;
  interest: string;
  'on-offline': string;
  termsAccepted: boolean;
}

export default function RegisterForm() {
  const { isOpen, contents, openModal, closeModal } = useModalStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      job: '',
      interest: '',
      'on-offline': '',
      termsAccepted: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleCheckBoxChange = (checked: boolean) => {
    setValue('termsAccepted', checked);
  };

  const openEmailModal = () => {
    openModal({
      contents: (
        <AlertModal
          headerText="알림"
          buttonText="확인"
          onButtonClick={closeModal}
          bodyText={`서비스를 이용하려면 이메일 인증이 필요합니다.\n등록하신 [이메일]로 인증 메일을 발송했으니, 확인 후 인증을 완료해주세요.`}
        />
      ),
    });
  };

  const openInterestModal = () => {
    openModal({
      contents: (
        <InterestModal
          onButtonClick={(selectedItems) => {
            setValue('interest', selectedItems.join(', '));
            closeModal();
          }}
        />
      ),
    });
  };

  const openJobModal = () => {
    openModal({
      contents: (
        <JobModal
          onButtonClick={(selectedJob) => {
            setValue('job', selectedJob.join('/'));
            closeModal();
          }}
        />
      ),
    });
  };

  return (
    <form
      className="flex w-[100%] flex-col items-start gap-[2.5rem] self-stretch"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex flex-col items-center justify-center self-stretch">
        <div className="flex flex-col justify-center gap-12 self-stretch">
          <h4 className="headline-sb-28 text-text-main">참가자 신청 정보</h4>
          <span className="body-m-16 text-text-sub">
            참여 경험을 최적화하기 위해 필수 정보를 입력해 주세요.
          </span>
        </div>
        <div className="flex flex-col items-end justify-center gap-[0.375rem] self-stretch">
          <div className="flex items-center justify-center gap-[0.125rem]">
            <p className="body-m-14 text-text-important">*</p>
            <p className="body-m-14 text-text-sub">필수 입력 항목</p>
          </div>
          <div className="flex items-center justify-center self-stretch bg-bg-secondary p-24">
            <div className="flex flex-1 flex-col justify-center gap-32">
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
                type="default"
                name="phone"
                applyItem="휴대폰 번호"
                placeholder="휴대폰 번호 (010-1234-5678)"
                register={register}
                state={errors.phone ? 'error' : 'default'}
                rules={{ required: '휴대폰 번호는 필수 입력 항목입니다.' }}
                errorMessage={errors.phone?.message}
              />
              <TextField
                $isRequired
                name="email"
                type="default"
                applyItem="이메일 주소"
                buttonText="이메일 인증"
                placeholder="이메일 (zoo@naver.com)"
                register={register}
                onButtonClick={openEmailModal}
                state={errors.email ? 'error' : 'default'}
                rules={{ required: '이메일은 필수 입력 항목입니다.' }}
                errorMessage={errors.email?.message}
              />
              <TextField
                $isRequired
                readOnly
                name="job"
                type="badgeField"
                applyItem="직군/직업"
                buttonText="직군/직업 선택"
                placeholder="직군/직업"
                register={register}
                onButtonClick={openJobModal}
                state={errors.job ? 'error' : 'default'}
                rules={{ required: '직군/직업은 필수 입력 항목입니다.' }}
                errorMessage={errors.job?.message}
              />
              <TextField
                $isRequired
                readOnly
                name="interest"
                type="badgeField"
                applyItem="관심있는 IT 분야"
                buttonText="분야 선택"
                placeholder="관심 IT 분야"
                register={register}
                onButtonClick={openInterestModal}
                state={errors.interest ? 'error' : 'default'}
                rules={{ required: '관심 IT 분야는 필수 입력 항목입니다.' }}
                errorMessage={errors.interest?.message}
              />
              <TextField
                readOnly
                placeholder="온/오프라인"
                type="default"
                name="on-offline"
                applyItem="온/오프라인"
                register={register}
                state="disabled"
                $isRequired={false}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start gap-6 self-stretch">
        <div className="flex flex-col items-start justify-center gap-12 self-stretch">
          <div className="flex items-center justify-center">
            <p className="title-sb-20 text-text-main">약관동의</p>
            <p className="title-sb-18 text-text-important">*</p>
          </div>
          <div className="flex items-center justify-center gap-[0.125rem]">
            <p className="body-r-14 text-text-sub">*</p>
            <p className="body-r-14 text-text-sub">
              필수 약관 동의가 완료되어야 서비스를 이용할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex h-[19rem] items-start justify-center self-stretch overflow-auto bg-bg-secondary px-48 py-24 scrollbar-hidden">
          <p className="body-m-14 w-[100%] text-text-sub">
            {SESSION_TERMS.terms}
          </p>
        </div>
        <CheckBox
          label="약관을 확인하고 동의합니다."
          onChange={handleCheckBoxChange}
        />
      </section>
      <section className="itmes-start flex w-full justify-between gap-5 self-stretch pt-[3rem]">
        <div className="flex w-1/2 flex-col gap-12 self-stretch">
          <h4 className="headline-sb-28 text-text-main">결제수단</h4>
          <span className="body-m-16 text-text-sub">
            참여 경험을 최적화하기 위해 쉽고 빠른 결제 프로세스를 제공합니다.
          </span>
        </div>
        <div className="flex h-[28.8125rem] w-1/2 flex-col gap-6">
          <div className="flex max-w-[38.125rem] flex-col gap-32 bg-bg-secondary p-40">
            <div className="flex flex-col items-start gap-5 self-stretch">
              <div className="flex items-center justify-between self-stretch">
                <label className="title-sb-20 text-text-sub">1일차</label>
                <span className="figure-m-16 text-text-main">NN,NNN원</span>
              </div>
              <div className="flex items-center justify-between self-stretch">
                <label className="title-sb-20 text-text-sub">2일차</label>
                <span className="figure-m-16 text-text-main">NN,NNN원</span>
              </div>
            </div>
            <div className="flex items-center justify-between self-stretch border-t border-solid border-divider-primary px-0 py-16">
              <label className="title-sb-24 text-text-main">Total</label>
              <span className="figure-m-20 text-text-primary">NN,NNN원</span>
            </div>
          </div>
          <PaymentButton />
        </div>
      </section>
      <RegisterButton />
      {isOpen && contents}
    </form>
  );
}
