import RoundedButton from "components/atom/button/RoundedButton";
import Plus from "components/atom/icon/common/Plus";
import { Link } from "react-router-dom";
import { cls } from "util/utils";

type Props = {
  to: string;
};

export default function FloatingButton({ to }: Props): JSX.Element {
  return (
    <div className={cls("fixed z-30 bottom-28 w-full max-w-[30rem] m-auto")}>
      <Link to={to}>
        <RoundedButton
          color="main"
          size="roundedLg"
          className="float-right mr-12"
        >
          <Plus />
        </RoundedButton>
      </Link>
    </div>
  );
}
