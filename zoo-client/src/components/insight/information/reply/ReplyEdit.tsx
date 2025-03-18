import Image from 'next/image';

export default function ReplyEdit() {
  return (
    <div>
      <div className="flex items-center gap-1">
        <Image
          height={24}
          width={24}
          src="/mock/reply-icon.svg"
          alt="reply-icon"
        />
        <span className="body-r-14 text-text-sub">답글</span>
      </div>
      <div className="flex flex-col items-end gap-5 px-20 py-16">
        <textarea
          className="h-64 min-w-full resize-none focus:outline-none"
          placeholder="해당 인사이트의 답글을 남겨 보세요!"
        />
        <button className="body-sm-16 text-text-primary">등록</button>
      </div>
    </div>
  );
}
