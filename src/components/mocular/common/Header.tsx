import React from "react";

interface HeaderProps {
  subtitle?: string;
}

Header.defaultProps = {
  subtitle: "",
};

export default function Header({ subtitle }: HeaderProps) {
  return (
    <header className="fixed pl-5 py-2 bg-lightGray z-40 max-w-[30rem] w-full">
      <h1 className="text-xl text-deepBlack font-Jua">
        SingleTalk&nbsp;{subtitle}
      </h1>
    </header>
  );
}
