import All from "components/atom/icon/category/All";
import Cafe from "components/atom/icon/category/Cafe";
import Effecient from "components/atom/icon/category/Effecient";
import Travel from "components/atom/icon/category/Travel";

export default function LocalCategory() {
  return (
    <nav>
      <h3 className="pl-3 text-xl font-bold text-deepBlack py-3">
        지역 카테고리
      </h3>
      <div className="w-full px-5 flex items-center justify-evenly pt-1 pb-2 border-b-2 border-lightGray">
        <All colored={true} />
        <Effecient />
        <Cafe />
        <Travel />
      </div>
    </nav>
  );
}
