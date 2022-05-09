import All from "components/atom/icon/category/All";
import Food from "components/atom/icon/category/Food";
import Habby from "components/atom/icon/category/Habby";
import Live from "components/atom/icon/category/Live";
import Money from "components/atom/icon/category/Money";

export default function GlobalCategory() {
  return (
    <nav>
      <h3 className="pl-3 text-xl font-bold text-deepBlack py-3">
        전체 카테고리
      </h3>
      <div className="w-full px-5 flex items-center justify-evenly pt-1 pb-2 border-b-2 border-lightGray">
        <All colored={true} />
        <Food />
        <Live />
        <Money />
        <Habby />
      </div>
    </nav>
  );
}
