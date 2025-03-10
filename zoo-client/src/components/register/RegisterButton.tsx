export default function RegisterButton() {
  return (
    <div className="flex w-[100%] items-center justify-center gap-8 self-stretch p-0">
      <button className="title-sb-20 flex h-[3.5rem] max-w-[23.4375rem] items-center justify-center rounded-[0.25rem] bg-fill-thirary px-24 py-16 text-text-primary">
        취소하기
      </button>
      <button className="title-sb-20 flex h-[3.5rem] flex-1 items-center justify-center gap-0 rounded-[0.25rem] bg-fill-primary px-24 py-12 text-text-white">
        확인하기
      </button>
    </div>
  );
}
