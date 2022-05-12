import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import { cls } from 'util/utils';

const sizeValue = 'h-5 w-5 rounded-sm';
const colorValue = 'focus:ring-0 checked:text-lightPurple';

export interface SelectBoxProps {
  register?: UseFormRegisterReturn | null;
  className?: string;
  value?: string | null;
  type?: 'checkbox' | 'radio';
  hidden?: boolean;
  id?: string;
}

SelectBox.defaultProps = {
  register: null,
  className: '',
  value: null,
  type: 'checkbox',
  hidden: false,
  id: undefined,
};

export default function SelectBox({
  className,
  register,
  value,
  type,
  hidden,
  id,
}: SelectBoxProps) {
  return value ? (
    <input
      type={type}
      {...register}
      value={value}
      className={cls(sizeValue, colorValue, className, hidden ? 'hidden' : '')}
      id={id}
    />
  ) : (
    <input
      type={type}
      {...register}
      className={cls(sizeValue, colorValue, className, hidden ? 'hidden' : '')}
      id={id}
    />
  );
}
