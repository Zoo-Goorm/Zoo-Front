interface ISpeaker {
  speakerName: string;
  speakerInfo: string;
}

export default function Speaker({ speakerName, speakerInfo }: ISpeaker) {
  return (
    <div className="inline-flex flex-wrap justify-center items-center gap-x-8 gap-y-2 px-0 py-8">
      <span className="title-sb-20 text-text-main">{speakerName}</span>
      <span className="body-m-16-150 text-text-sub">{speakerInfo}</span>
    </div>
  );
}
