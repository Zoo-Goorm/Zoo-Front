import Image from 'next/image';
import Thumbnail from '/radio/thumbnail.svg';

interface RadioProps {
  status: string;
  video: string;
}

export default function Radio({ status, video }: RadioProps) {
  return (
    <div className="relative text-center">
      <div className="">
        <Image
          alt="Thumbnail"
          src={Thumbnail}
          width={610}
          height={343}
          className={`rounded ${
            status === 'active'
              ? 'border-[1.5px] border-stroke-primary'
              : 'brightness-50'
          }`}
        />
      </div>

      <span
        className={status === 'active' ? 'text-text-primary' : 'text-text-sub'}
      >
        온라인
      </span>
    </div>
  );
}
