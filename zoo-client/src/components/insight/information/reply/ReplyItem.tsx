'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function ReplyItem() {
  const [detailedReply, setDetailedReply] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > 120);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 pl-32">
      <div className="flex gap-8">
        <Image
          src="/mock/profile.svg"
          width={24}
          height={24}
          alt="reply-profile"
        />
        <div className="flex items-center gap-4">
          <span className="body-sb-16 text-text-main">닉네임/실명</span>
          <span className="body-r-14 text-text-sub">NN분 전(수정됨)</span>
          <span className="body-m-16-150 text-text-title">강연자</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p
          ref={textRef}
          className="body-r-16-150 overflow-hidden text-text-sub"
          style={{ maxHeight: detailedReply ? '1000px' : '120px' }}
        >
          해당 내용은 인사이트 노트를 작성한 케이스에서 보여지는 글입니다. 글과
          타임라인은 동시에 작성이 가능합니다. 하지만 이미지와 투표는 동시에
          보여질 수 없습니다. 이미지 같은 경우 반응형에 따라 영역을 벗어날 만큼
          갯수가 많아질 시 캐러셀 버튼을 통해 컨트롤이 가능하도록 합니다.
          자세히보기 같은 경우 또한 동일하게 반응형에 따라 5줄이 넘어가면
          자세히보기 버튼을 노출해 더 디테일한 내용을 볼 수 있게 만듭니다.
          자세히보기 클릭 시 해당 버튼은 간략히 버튼으로 바뀌며 아코디언
          형식으로 5줄까지만 노출되고 그 이외 내용은 접혀야 합니다. 해당 내용은
          인사이트 노트를 작성한 케이스에서 보여지는 글입니다. 글과 타임라인은
          동시에 작성이 가능합니다. 하지만 이미지와 투표는 동시에 보여질 수
          없습니다. 이미지 같은 경우 반응형에 따라 영역을 벗어날 만큼 갯수가
          많아질 시 캐러셀 버튼을 통해 컨트롤이 가능하도록 합니다. 자세히보기
          같은 경우 또한 동일하게 반응형에 따라 5줄이 넘어가면 자세히보기 버튼을
          노출해 더 디테일한 내용을 볼 수 있게 만듭니다.
        </p>

        {isOverflowing && (
          <div
            onClick={() => setDetailedReply(!detailedReply)}
            className="flex cursor-pointer items-center gap-2"
          >
            <span>{detailedReply ? '닫기' : '자세히보기'}</span>
            <Image
              height={24}
              width={24}
              src="/button/down-arrow.svg"
              alt="down-arrow"
              className={`transition-transform duration-300 ease-in-out ${detailedReply ? 'rotate-180' : ''}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
