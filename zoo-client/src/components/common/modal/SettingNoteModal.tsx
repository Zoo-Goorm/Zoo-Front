'use client';
import ModalHeader from './Layout/ModalHeader';
import ModalContainer from './Layout/ModalContainer';
import useModalStore from '@/store/common/useModalStore';

function ModalBody() {
  return (
    <>
      <div className="flex w-full justify-evenly text-text-main">
        <div className="flex flex-col gap-4">
          <p className="body-sb-16">익명여부</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                defaultChecked
                type="radio"
                name="anon"
                value="실명"
                className="accent-fill-primary"
              />
              실명
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="anon"
                value="익명"
                className="accent-fill-primary"
              />
              익명
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-text-main">
          <p className="body-sb-16">공개 여부</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                defaultChecked
                type="radio"
                name="public"
                value="공개"
                className="accent-fill-primary"
              />
              공개
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="public"
                value="비공개"
                className="accent-fill-primary"
              />
              비공개
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="body-sb-16 flex w-full items-center justify-center rounded-md bg-fill-primary px-6 py-3 text-text-white"
      >
        등록하기
      </button>
    </>
  );
}

export default function SettingNoteModal() {
  const { closeModal } = useModalStore();

  return (
    <ModalContainer>
      <ModalHeader headerText="인사이트 노트 설정" closeModal={closeModal} />
      <ModalBody />
    </ModalContainer>
  );
}
