import ListButton from '../button/ListButton';

export default function ApplyButton() {
  return (
    <div className="absolute flex w-[100%] max-w-[64.375rem] opacity-90 backdrop-blur-[10px]">
      <ListButton type="primary" />
      <ListButton type="thirary" />
    </div>
  );
}
