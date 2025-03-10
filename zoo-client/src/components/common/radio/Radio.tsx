import Image from 'next/image';

interface RadioProps {
  status: string;
  video?: string;
}

export default function Radio({ status, video }: RadioProps) {
  return (
    <div className="text-center">
      <div>
        <Image
          alt="Thumbnail"
          src="/radio/thumbnail.svg"
          width={610}
          height={343}
          objectFit="cover"
          className={`h-[343px] w-[610px] rounded ${
            status === 'active'
              ? 'border-[1.5px] border-stroke-primary'
              : 'brightness-50'
          }`}
        />
      </div>

      <span
        className={status === 'active' ? 'text-text-primary' : 'text-text-sub'}
      >
        {status == 'active' ? '온라인' : '오프라인'}
      </span>
    </div>
  );
}
