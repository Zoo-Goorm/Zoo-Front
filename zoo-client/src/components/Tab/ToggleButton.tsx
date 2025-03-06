'use client'

import { useState } from 'react'

export default function ToggleButton() {
  const [topToggleActive, setTopToggleActive] = useState(true)

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative">
        <div
          className={`flex h-[17px] w-[40px] cursor-pointer items-center rounded-full border-[1px] border-[#b6bac0] ${
            topToggleActive ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
          onClick={() => setTopToggleActive(!topToggleActive)}
        >
          <div
            className={`h-[24px] w-[24px] transform rounded-full border-[1px] border-[#b6bac0] bg-white transition-transform duration-500 ease-in-out ${
              topToggleActive ? 'translate-x-4' : 'translate-x-[-2px]'
            }`}
          />
        </div>
      </div>
      <span className="font-medium text-black">마감된 세션 제외</span>
    </div>
  )
}
