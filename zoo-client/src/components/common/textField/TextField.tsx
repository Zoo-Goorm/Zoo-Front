import OblongButton from '../button/OblongButton';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface ITextField {
  type: 'default' | 'badgeField' | 'time';
  state?: 'default' | 'disabled' | 'error';
  applyItem: string;
  $isDisabled?: boolean;
  $isRequired: boolean;
  readOnly?: boolean;
  buttonText?: string;
  errorMessage?: string;
  placeholder: string;

  name: string;
  rules?: RegisterOptions;
  timer?: string;

  onButtonClick?: () => void;
  register: UseFormRegister<any>;
}

export default function TextField({
  type,
  timer,
  state = 'default',
  applyItem,
  buttonText,
  readOnly = false,
  errorMessage,
  placeholder,
  $isDisabled,
  $isRequired,
  name,
  rules,
  register,
  onButtonClick,
}: ITextField) {
  const textFieldStateClasses = {
    default:
      'text-text-main border-b border-solid border-stroke-thirary focus:border-stroke-primary',
    error:
      'text-text-error border-b border-solid border-stroke-error focus:border-stroke-error',
    disabled: 'border-none pointer-events-none text-text-sub',
  };

  return (
    <div className="flex items-center gap-16 self-stretch">
      <div className="flex w-1/3 max-w-[9.375rem] items-center gap-0 px-0 py-12">
        <p className="body-m-16 text-text-main">{applyItem}</p>
        {$isRequired && <p className="body-m-16 text-text-important">*</p>}
      </div>
      <div className="flex w-2/3 max-w-[31.25rem] flex-col justify-center gap-4">
        <input
          {...register(name, rules)}
          className={`flex items-center self-stretch bg-bg-transparent px-4 py-12 outline-none ${textFieldStateClasses[state]}`}
          readOnly={readOnly}
          placeholder={placeholder}
        />
        {type === 'badgeField' && (
          <div className="flex gap-4 self-stretch">
            {/* badge list 들어가야 함 (직군/직업, 관심 있는 IT 분야) */}
          </div>
        )}
        {state === 'error' && (
          <label className="caption-r-12 w-[100%] max-w-[19.4375rem] px-[0.1rem] py-1 text-text-error">
            {errorMessage}
          </label>
        )}
      </div>
      {type === 'time' && (
        <span className="figure-m-16 text-text-primary">{timer}</span>
      )}
      {buttonText && onButtonClick && (
        <div className="w-[6.25rem]">
          <OblongButton
            $disabled={$isDisabled}
            onClick={onButtonClick}
            size="xs"
            $buttonStyle="primary"
            text={buttonText}
          />
        </div>
      )}
    </div>
  );
}
