import Image from 'next/image';

interface RadioProps {
  status: string;
  video: string;
}

export default function Radio({ status, video }: RadioProps) {
  return (
    <div className="relative text-center">
      <div>
        <Image
          alt="Thumbnail"
          src="/radio/thumbnail.svg"
          width={610}
          height={343}
          objectFit="cover"
          className={`h-[176px] w-[317px] rounded tablet:h-[343px] tablet:w-[610px] ${
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
