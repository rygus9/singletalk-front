import { cls } from "util/utils";
import Input, { InputProps } from ".";

const labelSizeValue = {
  sm: "text-sm text-black pb-1",
  md: "text-md text-deepBlack pb-1",
  lg: "text-xl text-deepBlack pb-1",
};

interface Props extends InputProps {
  label: string;
  block?: boolean;
  labelSize?: "sm" | "md" | "lg";
}

LabelInput.defaultProps = {
  block: true,
  labelSize: "sm",
};

export default function LabelInput({
  label,
  block,
  labelSize,
  ...elem
}: Props) {
  return (
    <div>
      <label className={cls(block ? "block" : "flex items-center")}>
        <div
          className={cls(
            labelSizeValue[labelSize!],
            block ? "" : "min-w-fit mr-3 pb-0"
          )}
        >
          {label}
        </div>
        <Input {...elem} />
      </label>
    </div>
  );
}
