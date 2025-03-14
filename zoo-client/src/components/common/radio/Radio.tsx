'use client';

import { useRadioStore } from '@/store/common/useRadioStore';
import Image from 'next/image';

interface RadioProps {
  status: 'active' | 'inactive';
}

export default function Radio({ status }: RadioProps) {
  const { activeState, setActiveState } = useRadioStore();
  const bgTypeClass = {
    active: 'border-[1.5px] border-stroke-primary',
    inactive: 'brightness-50',
  };
  const textTypeClass = {
    active: 'text-text-primary',
    inactive: 'text-text-sub',
  };

  return (
    <div className="flex cursor-pointer flex-col gap-20 text-center">
      <Image
        onClick={() => setActiveState(status)}
        alt="Thumbnail"
        src="/radio/thumbnail.svg"
        width={610}
        height={343}
        className={`rounded ${
          activeState == status && bgTypeClass[activeState]
        }`}
      />
      <span
        className={`title-sb-24 text-text-main ${activeState == status && textTypeClass[activeState]}`}
      >
        {status == 'active' ? '온라인' : '오프라인'}
      </span>
    </div>
  );
}
