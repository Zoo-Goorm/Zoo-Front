'use client'

import { useState } from 'react'

export default function ToggleButton() {
  const [topToggleActive, setTopToggleActive] = useState(true)

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative">
        <div
          className={`border-stroke-primary-thirary flex h-16 w-10 cursor-pointer items-center rounded-full border-[1px] ${
            topToggleActive
              ? 'bg-fill-primary border-stroke-primary'
              : 'bg-bg-primary'
          }`}
          onClick={() => setTopToggleActive(!topToggleActive)}
        >
          <div
            className={`bg-bg-primary border-stroke-primary-thirary h-6 w-6 transform rounded-full border-[1px] transition-transform duration-300 ease-in-out ${
              topToggleActive ? 'translate-x-[15px]' : 'translate-x-[-1px]'
            }`}
          />
        </div>
      </div>
      <span className="text-text-main font-medium">마감된 세션 제외</span>
    </div>
  )
}
