import { ButtonProps } from '@/types/insight/button';
import Image from 'next/image';

export default function NoteFooter({
  AddImageHandler,
  AddVoteHandler,
  AddTimeHandler,
}: {
  AddImageHandler: () => void;
  AddVoteHandler: () => void;
  AddTimeHandler: () => void;
}) {
  const ButtonList: ButtonProps = {
    addImg: ['/button/AddImage.svg', AddImageHandler],
    vote: ['/button/vote.svg', AddVoteHandler],
    time: ['/button/time.svg', AddTimeHandler],
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-16">
        {Object.entries(ButtonList).map(([index, [src, fnc]]) => (
          <Image
            key={index}
            width={32}
            height={32}
            src={src}
            alt={`btn-${index}`}
            className="cursor-pointer"
            onClick={fnc}
          />
        ))}
      </div>
      <div className="body-m-16 flex gap-2">
        <button
          onClick={() => console.log('임시저장')}
          className="cursor-pointer text-text-sub"
        >
          임시저장
        </button>
        <button type="submit" className="cursor-pointer text-text-primary">
          등록
        </button>
      </div>
    </div>
  );
}
