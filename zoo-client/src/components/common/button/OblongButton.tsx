import Image from 'next/image';

interface IOblongButtonProps {
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  type: 'primary' | 'thirary';
  $disabled?: boolean;
  text: string;
}

export default function OblongButton({
  size,
  type,
  text,
  $disabled = false,
}: IOblongButtonProps) {
  const buttonSizeClasses = {
    xl: 'py-16 px-24 gap-20 headline-sb-28',
    l: 'py-12 px-24 gap-20 title-sb-20',
    m: 'py-12 px-16 text-center body-sb-16',
    s: 'py-12 px-16 text-center body-m-14',
    xs: 'py-8 px-16 text-center body-m-14',
  };

  const iconSizeClasses = {
    xl: 36,
    l: 24,
  };

  const buttonStateClasses = {
    primary: $disabled
      ? 'bg-fill-primary-disabled text-text-white pointer-events-none'
      : 'bg-fill-primary text-text-white hover:bg-fill-primary-hover focus:bg-fill-primary-pressed',
    thirary: $disabled
      ? 'bg-fill-thirary-disabled text-text-thirary pointer-events-none'
      : 'bg-fill-thirary text-text-primary hover:bg-fill-thirary-hover focus:bg-fill-thirary-pressed',
  };

  const isIconSize = type === 'primary' && (size === 'xl' || size === 'l');
  const iconSize = isIconSize ? iconSizeClasses[size] : 0;

  return (
    <div
      className={`inline-flex rounded-[0.25rem] ${buttonSizeClasses[size]} ${buttonStateClasses[type]}`}
    >
      {text}
      {type === 'primary' ? (
        <Image
          src="/button/right-arrow.svg"
          alt="right-arrow-icon"
          width={iconSize}
          height={iconSize}
        />
      ) : undefined}
    </div>
  );
}
