import Image from 'next/image';

interface ICommentCount {
  count: string;
}

export default function CommentCount({ count }: ICommentCount) {
  return (
    <div className="flex items-center gap-4">
      <Image src="/comment/comment.svg" alt="댓글 수" height={24} width={24} />
      <span className="figure-m-14">{count}</span>
    </div>
  );
}
