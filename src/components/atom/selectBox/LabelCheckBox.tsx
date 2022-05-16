import { cls } from "util/utils";
import SelectBox, { SelectBoxProps } from ".";

interface Props extends SelectBoxProps {
  label: string;
  labelSize: "sm" | "md";
}

LabelCheckBox.defaultProps = {
  labelSize: "sm",
};

export default function LabelCheckBox({
  label,
  labelSize,
  className,
  ...elem
}: Props) {
  return (
    <label className={cls("flex items-center")}>
      <span
        className={cls(
          "text-lightBlack pr-2 text-xl",
          labelSize === "md" ? "text-xl" : "text-md"
        )}
      >
        {label}
      </span>
      <SelectBox
        className={cls("focus:ring-0 checked:text-lightGreen")}
        {...elem}
      />
    </label>
  );
}
