import Image from 'next/image';

interface IOblongButtonProps {
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  $buttonStyle: 'primary' | 'thirary';
  $disabled?: boolean;
  text: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  iconVisible?: boolean;
}

export default function OblongButton({
  size,
  type = 'button',
  $buttonStyle,
  text,
  $disabled = false,
  onClick,
  iconVisible = true,
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

  const isIconSize =
    $buttonStyle === 'primary' && (size === 'xl' || size === 'l');
  const iconSize = isIconSize ? iconSizeClasses[size] : 0;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex w-[100%] items-center justify-center rounded-[0.25rem] text-center ${buttonSizeClasses[size]} ${buttonStateClasses[$buttonStyle]}`}
    >
      {text}
      {$buttonStyle === 'primary' && iconVisible ? (
        <Image
          src="/button/right-arrow.svg"
          alt="right-arrow-icon"
          width={iconSize}
          height={iconSize}
        />
      ) : null}
    </button>
  );
}
