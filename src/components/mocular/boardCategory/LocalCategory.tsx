import All from "components/atom/icon/category/All";
import Cafe from "components/atom/icon/category/Cafe";
import Travel from "components/atom/icon/category/Travel";
import Buy from "components/atom/icon/category/Buy";
import useCategory from "./hook/useCategory";
import { cls } from "util/utils";

export type LocalCategoryKind = "all" | "cafe" | "buy" | "travel";

const localElement: {
  element: JSX.Element;
  coloredElement: JSX.Element;
  category: LocalCategoryKind;
}[] = [
  { category: "all", coloredElement: <All colored={true} />, element: <All /> },
  {
    category: "cafe",
    coloredElement: <Cafe colored={true} />,
    element: <Cafe />,
  },
  {
    category: "buy",
    coloredElement: <Buy colored={true} />,
    element: <Buy />,
  },
  {
    category: "travel",
    coloredElement: <Travel colored={true} />,
    element: <Travel />,
  },
];

export default function LocalCategory() {
  const { category, onCategorySet } = useCategory();

  return (
    <nav>
      <h3 className="pl-3 text-xl font-bold text-deepBlack py-3">
        지역 카테고리
      </h3>
      <ul className="w-full px-5 flex items-center justify-evenly pt-1 pb-2 border-b-2 border-lightGray">
        {localElement.map((elem, index) => (
          <li
            key={index}
            className={cls("cursor-pointer")}
            onClick={() => onCategorySet(elem.category)}
          >
            {elem.category === category ? elem.coloredElement : elem.element}
          </li>
        ))}
      </ul>
    </nav>
  );
}
