'use client';

import { useToggleStore } from '@/store/common/useToggleStore';

export default function ToggleButton() {
  const { toggleState, setToggleState } = useToggleStore();

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative">
        <div
          className={`border-stroke-primary-thirary flex h-16 w-10 cursor-pointer items-center rounded-full border-[1px] ${
            toggleState
              ? 'border-stroke-primary bg-fill-primary'
              : 'bg-bg-primary'
          }`}
          onClick={() => setToggleState(!toggleState)}
        >
          <div
            className={`border-stroke-primary-thirary h-6 w-6 transform rounded-full border-[1px] bg-bg-primary transition-transform duration-300 ease-in-out ${
              toggleState ? 'translate-x-[15px]' : 'translate-x-[-1px]'
            }`}
          />
        </div>
      </div>
      <span className="font-medium text-text-main">마감된 세션 제외</span>
    </div>
  );
}
