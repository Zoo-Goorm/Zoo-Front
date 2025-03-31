'use client';
import useModalStore from '@/store/common/useModalStore';
import Image from 'next/image';
import FilterModal from '../modal/FilterModal';

export default function ToggleButton() {
  const { openModal } = useModalStore();

  const openFilterModal = () => {
    openModal({
      contents: <FilterModal />,
    });
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <label>Filter</label>
      <Image
        onClick={() => openFilterModal()}
        src={'/tab/filter-icon.svg'}
        alt="filter"
        width={24}
        height={24}
      />
    </div>
  );
}
