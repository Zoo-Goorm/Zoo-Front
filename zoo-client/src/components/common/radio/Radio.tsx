'use client';

import { useRadioStore } from '@/store/useRadioStore';
import Image from 'next/image';

interface RadioProps {
  status: 'active' | 'inactive';
}

export default function Radio({ status }: RadioProps) {
  const { setActiveState } = useRadioStore();
  return (
    <div className="cursor-pointer text-center">
      <Image
        onClick={() => setActiveState(status)}
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
      <span
        className={status === 'active' ? 'text-text-primary' : 'text-text-sub'}
      >
        {status == 'active' ? '온라인' : '오프라인'}
      </span>
    </div>
  );
}
