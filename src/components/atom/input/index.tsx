import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { cls } from "util/utils";

const inputSizeValue = {
  sm: "h-8 rounded-md text-sm text-deepBlack",
  md: "h-10 rounded-lg text-md text-deepBlack",
  lg: "h-12 rounded-lg text-xl text-deepBlack",
};

const colorValue = {
  normal: "border-gray focus:ring-lightPurple focus:border-lightPurple",
  main: "border-deepPurple focus:ring-deepPurple focus:border-deepPurple",
  black: "border-deepGray focus:ring-lightBlack focus:border-lightBlack",
};

export interface InputProps {
  className?: string;
  type?: string;
  inputSize?: "sm" | "md" | "lg";
  color?: "normal" | "main" | "black";
  register?: UseFormRegisterReturn | null;
  placeholder?: string;
  error?: FieldError | undefined;
  onBlur?: () => any;
}

Input.defaultProps = {
  className: "",
  type: "text",
  inputSize: "md",
  color: "normal",
  register: null,
  placeholder: "",
  error: null,
  onBlur: null,
};

export default function Input({
  className,
  type,
  inputSize,
  color,
  register,
  placeholder,
  error,
  onBlur,
}: InputProps) {
  return (
    <>
      {onBlur ? (
        <input
          type={type}
          placeholder={placeholder}
          className={cls(
            "w-full placeholder:text-deepGray",
            inputSizeValue[inputSize!],
            colorValue[color!],
            className
          )}
          {...register}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={cls(
            "w-full placeholder:text-deepGray",
            inputSizeValue[inputSize!],
            colorValue[color!],
            className
          )}
          {...register}
        />
      )}
      {error && (
        <div className="text-sm text-red-500 py-1">{error.message}</div>
      )}
    </>
  );
}
