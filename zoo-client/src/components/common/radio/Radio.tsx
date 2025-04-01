'use client';

import { useRadioStore } from '@/store/common/useRadioStore';
import Image from 'next/image';

interface RadioProps {
  status: 'active' | 'inactive';
}

export default function Radio({ status }: RadioProps) {
  const { activeState, setActiveState } = useRadioStore();
  const bgTypeClass = {
    active: 'border-[1.5px] border-stroke-primary box-border',
    inactive: 'border-[1.5px] border-stroke-primary box-border',
  };
  const textTypeClass = {
    active: 'text-text-primary',
    inactive: 'text-text-sub',
  };

  return (
    <div className="flex cursor-pointer flex-col gap-20 text-center">
      <div className="relative h-[343px] w-[610px]">
        <Image
          onClick={() => setActiveState(status)}
          alt="Thumbnail"
          src={status === 'active' ? '/radio/online.png' : '/radio/offline.png'}
          priority
          fill
          style={{ objectFit: 'cover' }}
          className={`rounded ${activeState === status ? (bgTypeClass[activeState] ?? '') : ''}`}
        />
      </div>
      <span
        className={`title-sb-24 text-text-main ${activeState == status && textTypeClass[activeState]}`}
      >
        {status == 'active' ? '온라인' : '오프라인'}
      </span>
    </div>
  );
}
