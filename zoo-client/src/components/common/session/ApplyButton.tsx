import ListButton from '../button/ListButton';

export default function ApplyButton() {
  return (
    <div className="absolute flex w-[100%] max-w-[64.375rem] opacity-90 backdrop-blur-[10px]">
      <ListButton type="thirary" text="상세 보기" />
      <ListButton type="primary" text="세션 신청" />
    </div>
  );
}
