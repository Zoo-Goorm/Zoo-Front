export default function SessionTime({ sessionTime }: { sessionTime: string }) {
  return (
    <div className="title-sb-24 flex w-[190px] flex-col justify-center text-bg-black">
      <span>{sessionTime}</span>
    </div>
  );
}
