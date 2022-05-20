import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { openDefaultValue, openState } from "recoil/openState";

export default function ModalFrame({
  children,
  onClose,
}: {
  children: JSX.Element | string;
  onClose: () => void;
}) {
  const [open, setOpen] = useRecoilState(openState);
  useEffect(() => {
    const preventGoBack = () => {
      setOpen(openDefaultValue);
    };
    window.addEventListener("popstate", preventGoBack);

    return () => window.removeEventListener("popstate", preventGoBack);
  }, []);

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest(".inner");
    if (clicked) return;
    onClose();
  }, []);

  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-opacity-30 bg-black z-50 overflow-hidden"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
