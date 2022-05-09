import React from "react";
import { cls } from "util/utils";

const sizeValue = {
  roundedSm: "w-10 h-10 rounded-full",
  roundedLg: "w-14 h-14 rounded-full",
  sm: "min-w-[4rem] h-6 rounded-sm text-sm px-2",
  md: "min-w-[6rem] h-8 rounded-lg text-md px-3",
  lg: "min-w-[9rem] h-10 rounded-md text-xl px-4",
};

const colorValue = {
  main: "bg-deepGreen text-white",
  normal: "border border-deepGray text-lightBlack",
  normalColor: "border-2 border-deepGreen text-deepGreen",
};

export interface ButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => any;
  type?: "button" | "submit";
  size?: "roundedSm" | "roundedLg" | "sm" | "md" | "lg";
  color?: "main" | "normal" | "normalColor";
  className?: string;
  children: JSX.Element | string;
}

Button.defaultProps = {
  onClick: null,
  type: "button",
  size: "md",
  color: "normal",
  className: "",
};

export default function Button({
  onClick,
  type,
  size,
  color,
  className,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cls(
        sizeValue[size!],
        colorValue[color!],
        "flex justify-center items-center",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
