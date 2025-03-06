import React, { useState } from 'react';
import LeftArrow from './arrow/LeftArrow';
import RightArrow from './arrow/LeftArrow';

export default function ArrowBox() {
  const [nextView, setNextView] = useState<boolean>(false);

  const arrowDirections = [
    { Component: LeftArrow, activeColor: '#6B6B6B', inactiveColor: '#d1d1d1' },
    { Component: RightArrow, activeColor: '#d1d1d1', inactiveColor: '#6B6B6B' },
  ];

  return (
    <div className="flex gap-2">
      {arrowDirections.map(
        ({ Component, activeColor, inactiveColor }, index) => (
          <button
            key={index}
            onClick={() => setNextView(!nextView)}
            className="h-16 w-16"
          >
            <Component fill={nextView ? activeColor : inactiveColor} />
          </button>
        ),
      )}
    </div>
  );
}
