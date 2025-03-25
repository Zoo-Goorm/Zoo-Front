'use client';
// import NoteImageInput from '../note/NoteImageInput';
// import { useRef } from 'react';
// import { useInsightFormStore } from '@/store/common/insight/useInsightForm';
// import NoteVoteInput from '../note/NoteVoteInput';
import useModalStore from '@/store/common/useModalStore';
import SettingNoteModal from '@/components/common/modal/SettingNoteModal';
import SaveInsightModal from '@/components/common/modal/SaveInsightModal';
import { useState } from 'react';
import { useSaveInsight } from '@/store/common/insight/useSaveInsight';

export default function NoteInput({ text, id }: { text: string; id: number }) {
  const { openModal } = useModalStore();
  const [memo, setMemo] = useState('');
  const { content } = useSaveInsight();

  const openSettingModal = () => {
    openModal({
      contents: <SettingNoteModal />,
    });
  };
  const openSaveModal = () => {
    openModal({
      contents: (
        <SaveInsightModal
          headerText="임시저장"
          bodyText={`해당 페이지를 벗어 날 시 임시저장을 누르지 않으면 
인사이트에 작성한 모든 노트 정보가 사라집니다.`}
          memo={memo}
        />
      ),
    });
  };

  return (
    <>
      <input hidden name="sessionId" defaultValue={Number(id)} />
      <textarea
        required
        name="memo"
        onChange={(e) => setMemo(e.target.value)}
        className="h-64 w-full resize-none text-text-thirary focus:outline-none"
        placeholder={text}
        defaultValue={content}
      />
      {/* <NoteImageInput fileInputRef={fileInputRef} /> */}
      {/* <NoteVoteInput /> */}
      <div className="flex items-center justify-between">
        <div className="flex gap-16">
          {/* {Object.entries(ButtonList).map(([index, [src, fnc]]) => (
            <Image
              key={index}
              width={32}
              height={32}
              src={src}
              alt={`btn-${index}`}
              className="cursor-pointer"
              onClick={fnc}
            />
          ))} */}
        </div>
        <div className="body-m-16 flex gap-2">
          <button
            type="button"
            onClick={openSaveModal}
            className="cursor-pointer text-text-sub"
          >
            임시저장
          </button>
          <button
            type="button"
            onClick={openSettingModal}
            className="cursor-pointer text-text-primary"
          >
            등록
          </button>
        </div>
      </div>
    </>
  );
}
