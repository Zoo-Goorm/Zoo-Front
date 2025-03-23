import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SessionListItems = () => {
  const router = useRouter();
  return (
    <li className="flex items-center justify-between px-20 py-16">
      <span className="h-[20px] w-[209px] overflow-hidden">
        세션 1로 이동하기입니다 버튼의 텍스트가 넘어가면 히든 처리
      </span>
      <Image
        onClick={() => router.push('/sessions/1/insight-notes')}
        src="/button/right-arrow-side-in.svg"
        alt="right-arrow-side-in-btn"
        className="cursor-pointer"
        height={28}
        width={28}
      />
    </li>
  );
};

export default function InsightSideNavigationBar() {
  const [onList, setOnList] = useState(false);
  return (
    <>
      {!onList ? (
        <div
          onClick={() => setOnList(!onList)}
          className="fixed z-50 flex h-[892px] w-[32px] cursor-pointer items-center rounded-r-md bg-bg-secondary"
        >
          <Image
            src="/button/right-arrow-side.svg"
            width={28}
            height={28}
            alt="side-arrow-btn"
          />
        </div>
      ) : (
        <div className="fixed z-50 flex h-[892px] w-[302px] flex-col rounded-r-md bg-bg-secondary">
          <div className="body-sb-16 flex w-full justify-end px-20 py-16 text-text-main">
            <Image
              onClick={() => setOnList(!onList)}
              src="/modal/close.svg"
              alt="close-btn"
              height={28}
              width={28}
              className="cursor-pointer"
            />
          </div>
          <ul className="body-sb-16 w-full text-text-main">
            <SessionListItems />
            <SessionListItems />
            <SessionListItems />
            <SessionListItems />
            <SessionListItems />
          </ul>
        </div>
      )}
    </>
  );
}
