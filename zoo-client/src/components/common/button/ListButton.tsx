import RightArrow from './icon/RightArrow';

interface IListButtonProps {
  type: 'primary' | 'thirary';
  text: '상세 보기' | '세션 신청';
}

export default function ListButton({ type, text }: IListButtonProps) {
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
      onClick={() => console.log(text)}
      className={`headline-sb-40 flex cursor-pointer items-center px-40 py-0 backdrop-blur-[10px] mobile:h-[8.75rem] mobile:w-[23.8125rem] website:h-[200px] website:w-[31.9375rem] ${buttonTypeClasses[type]} justify-between`}
    >
      <span>{text}</span>
      <RightArrow fill={buttonIconColorClasses[type]} />
    </div>
  );
}
