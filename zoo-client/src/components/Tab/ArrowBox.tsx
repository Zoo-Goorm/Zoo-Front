import React, { useState } from 'react'
import LeftArrow from './Arrow/LeftArrow'
import RightArrow from './Arrow/LightArrow'

export default function ArrowBox() {
  const [nextView, setNextView] = useState<boolean>(false)

  return (
    <div className="flex gap-2">
      <button onClick={() => setNextView(!nextView)} className="h-4 w-4">
        <LeftArrow fill={nextView ? '#6B6B6B' : '#d1d1d1'} />
      </button>
      <button onClick={() => setNextView(!nextView)} className="h-4 w-4">
        <RightArrow fill={nextView ? '#d1d1d1' : '#6B6B6B'} />
      </button>
    </div>
  )
}
