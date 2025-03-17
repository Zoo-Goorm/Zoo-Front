import { insightChip } from '@/mock/insightChip';
import ChipList from '../chip/ChipList';

const Title = () => {
  return (
    <div className="max-w-full">
      <h1 className="headline-sb-28 break-all text-text-main">
        제목을 입력해 주세요. 제목을 입력해 주세요. 제목을 입력해 주세요. 제목을
        입력해 주세요. 제목을 입력해 주세요.
      </h1>
      <p className="body-m-16 text-text-sub">
        간략한 세션 정보에 대해서 작성해 주세요 간략한 세션 정보에 대해서 작성해
        주세
      </p>
    </div>
  );
};

export default function InsightInfoModal() {
  return (
    <div className="size-full">
      <ChipList type={'subject'} dataList={insightChip} size="l" />
      <Title />
    </div>
  );
}
