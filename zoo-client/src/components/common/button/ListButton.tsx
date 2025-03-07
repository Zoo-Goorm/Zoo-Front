import Image from 'next/image';
import RightArrow from './icon/RightArrow';

interface IListButtonProps {
  type: 'primary' | 'thirary';
}

export default function ListButton({ type }: IListButtonProps) {
  const buttonTypeClasses = {
    primary: 'bg-fill-primary-list text-text-white',
    thirary: 'bg-fill-thirary-list text-text-headline',
  };

  const buttonIconColorClasses = {
    primary: '#eee',
    thirary: '#2D2D2D',
  };

  return (
    <div
      className={`headline-sb-40 flex items-center p-24 px-40 py-0 backdrop-blur-[10px] mobile:h-[8.75rem] mobile:w-[23.8125rem] website:h-[14.75rem] website:w-[31.9375rem] ${buttonTypeClasses[type]} justify-between`}
    >
      <span>세션 신청</span>
      <RightArrow fill={buttonIconColorClasses[type]} />
    </div>
  );
}
