interface ISelectButtonProps {
  isDisabled: boolean;
}

export default function SelectSessionButton({
  isDisabled,
}: ISelectButtonProps) {
  return (
    <div className="flex size-full items-end justify-end">
      <button
        className={`body-m-14 text-white { isDisabled ? 'cursor-not-allowed bg-fill-primary-disabled' : 'bg-fill-primary' } rounded-md bg-fill-primary px-16 py-8`}
      >
        {isDisabled ? '세션 마감' : '세션 선택'}
      </button>
    </div>
  );
}
