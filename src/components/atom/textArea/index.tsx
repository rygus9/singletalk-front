import { FieldError } from "react-hook-form/dist/types/errors";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { cls } from "util/utils";

const textAreaHeightValue = {
  sm: "min-h-[6.125rem]",
  md: "min-h-[11.125rem]",
};

interface Props {
  label?: string | null;
  register?: UseFormRegisterReturn | null;
  textAreaHeight?: "sm" | "md";
  error?: FieldError | undefined;
  placeholder?: string;
}

TextArea.defaultProps = {
  label: null,
  register: null,
  textAreaHeight: "md",
  error: null,
  placeholder: "내용을 입력하세요",
};

export default function TextArea({
  label,
  register,
  textAreaHeight,
  error,
  placeholder,
}: Props) {
  return (
    <>
      {label && <h3 className={cls("text-xl", "sm:pb-2")}>{label}</h3>}
      <textarea
        className={cls(
          "tracking-normal resize-none pb-4 px-4 outline-none border border-deepGray rounded-lg w-full text-black",
          textAreaHeightValue[textAreaHeight!],
          "focus:ring-lightGreen focus:border-lightGreen",
          "placeholder:text-deepGray"
        )}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <div className="text-sm text-red-500 pb-2">{error.message}</div>
      )}
    </>
  );
}
