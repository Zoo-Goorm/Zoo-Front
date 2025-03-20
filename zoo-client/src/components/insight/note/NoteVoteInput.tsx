import { useInsightFormStore } from '@/store/common/insight/useInsightForm';

export default function NoteVoteInput() {
  const { vote, editVoteItem, addVoteItem, removeVoteItem } =
    useInsightFormStore();

  const handleInputChange = (index: number, value: string) => {
    editVoteItem(index, value);
  };

  return (
    <>
      {vote && (
        <div className="flex w-1/2 flex-col gap-2 rounded-sm bg-bg-secondary p-16">
          {vote.map((_, index) => (
            <input
              key={index}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="body-m-14 rounded-sm bg-bg-primary p-12 text-text-main"
              placeholder={`투표 후보 ${index + 1}`}
            />
          ))}
          {vote.length < 3 ? (
            <button
              type="button"
              onClick={addVoteItem}
              className="text-text-primary"
            >
              항목 추가
            </button>
          ) : (
            <button
              type="button"
              onClick={removeVoteItem}
              className="text-text-primary"
            >
              항목 제거
            </button>
          )}
        </div>
      )}
    </>
  );
}
