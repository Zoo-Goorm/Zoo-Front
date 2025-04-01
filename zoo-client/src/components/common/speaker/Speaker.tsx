interface ISpeaker {
  speakerName: string;
}

export default function Speaker({ speakerName }: ISpeaker) {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-x-8 gap-y-2 px-0 py-8">
      <span className="title-sb-20 text-text-main">{speakerName}</span>
    </div>
  );
}
