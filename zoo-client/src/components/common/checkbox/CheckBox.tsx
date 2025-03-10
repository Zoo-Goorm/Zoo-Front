'use client';

import { useState } from 'react';
import CheckIcon from './CheckIcon';

interface ICheckBoxProps {
  label: string;
  onChange: (checked: boolean) => void;
}

export default function CheckBox({ label, onChange }: ICheckBoxProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleCheckBox = () => {
    setIsSelected((prev) => {
      const newState = !prev;
      onChange(newState);

      return newState;
    });
  };

  return (
    <div
      onClick={handleToggleCheckBox}
      className="inline-flex h-[1.5rem] flex-shrink-0 cursor-pointer items-center justify-center gap-12 p-0"
    >
      {isSelected ? <CheckIcon fill="#4824ff" /> : <CheckIcon fill="#6B6B6B" />}
      <span className="body-m-16 text-text-main">{label}</span>
    </div>
  );
}
