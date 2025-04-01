import { SubmitHandler, useForm } from 'react-hook-form';
import {
  AlertModal,
  InterestModal,
  JobModal,
  OblongButton,
  TextField,
} from '@/components';
import useModalStore from '@/store/common/useModalStore';
import { IUserProfile } from '@/services/profile';
import { useProfile, useUpdateProfile } from '@/hooks/profile/useProfile';

interface FormData {
  name: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  job: string;
  interestCategory: string;
  termsAccepted: boolean;
  snsUrl: string;
}

interface IUserProfileFornProps {
  onSaveButtonClick: (isSuccessed: boolean) => void;
}

export default function UserProfileForm({
  onSaveButtonClick,
}: IUserProfileFornProps) {
  const { mutate, isSuccess } = useUpdateProfile();
  const { data: userProfile } = useProfile();
  const { isOpen, contents, openModal, closeModal } = useModalStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      nickname: '',
      phoneNumber: '',
      email: '',
      job: '',
      interestCategory: '',
      snsUrl: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const [occupation, job] = data.job.split('/');

      const profileData: Omit<IUserProfile, 'username'> = {
        name: data.name,
        nickname: data.nickname,
        email: data.email,
        phoneNumber: data.phoneNumber,
        occupation: occupation.trim(),
        job: job.trim(),
        interestCategory: data.interestCategory,
        snsUrl: data.snsUrl,
      };

      mutate(profileData);
      if (isSuccess) onSaveButtonClick(true);
    } catch (error) {
      onSaveButtonClick(false);
      console.error('업데이트 중 에러 발생:', error);
    }
  };

  const openInterestModal = () => {
    openModal({
      contents: (
        <InterestModal
          onButtonClick={(selectedItems) => {
            setValue('interestCategory', selectedItems.join(', '));
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

  const openNetworkingModal = () => {
    openModal({
      contents: (
        <AlertModal
          headerText="알림"
          buttonText="확인"
          onButtonClick={closeModal}
          bodyText="[연동된 계정]을 등록하였습니다."
        />
      ),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[100%] flex-col items-start justify-center self-stretch p-24"
    >
      <div className="flex w-[100%] flex-1 flex-col justify-center gap-32">
        <TextField
          $isRequired
          name="name"
          type="default"
          applyItem="이름"
          defaultValue={userProfile?.name || ''}
          placeholder="이름"
          register={register}
          state={errors.name ? 'error' : 'default'}
          rules={{ required: '이름은 필수 입력 항목입니다.' }}
          errorMessage={errors.name?.message}
        />
        <TextField
          $isRequired
          type="default"
          name="nickname"
          applyItem="닉네임"
          defaultValue={userProfile?.nickname || ''}
          placeholder="닉네임"
          register={register}
          state={errors.nickname ? 'error' : 'default'}
          rules={{ required: '닉네임은 필수 입력 항목입니다.' }}
          errorMessage={errors.nickname?.message}
        />
        <TextField
          $isRequired
          name="email"
          type="default"
          applyItem="이메일 주소"
          buttonText="이메일 인증"
          defaultValue={userProfile?.email || ''}
          placeholder="이메일 (zoo@naver.com)"
          register={register}
          state={errors.email ? 'error' : 'default'}
          rules={{ required: '이메일은 필수 입력 항목입니다.' }}
          errorMessage={errors.email?.message}
        />
        <TextField
          $isRequired
          type="default"
          name="phoneNumber"
          applyItem="휴대폰 번호"
          defaultValue={userProfile?.phoneNumber || ''}
          placeholder="휴대폰 번호 (010-1234-5678)"
          register={register}
          state={errors.phoneNumber ? 'error' : 'default'}
          rules={{ required: '휴대폰 번호는 필수 입력 항목입니다.' }}
          errorMessage={errors.phoneNumber?.message}
        />
        <TextField
          $isRequired
          readOnly
          name="job"
          type="badgeField"
          applyItem="직군/직업"
          buttonText="직군/직업 선택"
          placeholder="직군/직업"
          defaultValue={`${userProfile?.occupation}/${userProfile?.job}` || ''}
          register={register}
          onButtonClick={openJobModal}
          state={errors.job ? 'error' : 'default'}
          rules={{ required: '직군/직업은 필수 입력 항목입니다.' }}
          errorMessage={errors.job?.message}
        />
        <TextField
          $isRequired
          readOnly
          name="interestCategory"
          type="badgeField"
          applyItem="관심있는 IT 분야"
          buttonText="분야 선택"
          defaultValue={userProfile?.interestCategory || ''}
          placeholder="관심 IT 분야"
          register={register}
          onButtonClick={openInterestModal}
          state={errors.interestCategory ? 'error' : 'default'}
          rules={{ required: '관심 IT 분야는 필수 입력 항목입니다.' }}
          errorMessage={errors.interestCategory?.message}
        />
        <TextField
          type="default"
          $isRequired={false}
          name="snsUrl"
          applyItem="네트워킹 연동"
          buttonText="저장하기"
          defaultValue={userProfile?.snsUrl || ''}
          placeholder="네트워킹 주소 입력 (e.g. instagram, github)"
          register={register}
          onButtonClick={openNetworkingModal}
        />
      </div>
      <div className="flex w-[100%] justify-center">
        <div className="w-[12.5rem] pt-80">
          <OblongButton
            type="submit"
            text="저장하기"
            $buttonStyle="primary"
            size="l"
            iconVisible={false}
          />
        </div>
      </div>
      {isOpen && contents}
    </form>
  );
}
