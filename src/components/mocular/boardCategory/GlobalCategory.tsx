import All from "components/atom/icon/category/All";
import Food from "components/atom/icon/category/Food";
import Hobby from "components/atom/icon/category/Hobby";
import Live from "components/atom/icon/category/Live";
import Money from "components/atom/icon/category/Money";
import { cls } from "util/utils";
import useCategory from "./hook/useCategory";

export type GlobalCategoryKind = "all" | "food" | "live" | "money" | "hobby";

const globalElement: {
  element: JSX.Element;
  coloredElement: JSX.Element;
  category: GlobalCategoryKind;
}[] = [
  { category: "all", coloredElement: <All colored={true} />, element: <All /> },
  {
    category: "food",
    coloredElement: <Food colored={true} />,
    element: <Food />,
  },
  {
    category: "live",
    coloredElement: <Live colored={true} />,
    element: <Live />,
  },
  {
    category: "money",
    coloredElement: <Money colored={true} />,
    element: <Money />,
  },
  {
    category: "hobby",
    coloredElement: <Hobby colored={true} />,
    element: <Hobby />,
  },
];

export default function GlobalCategory() {
  const { category, onCategorySet } = useCategory();

  return (
    <nav>
      <h3 className="pl-3 text-xl font-bold text-deepBlack py-3">
        전체 카테고리
      </h3>
      <ul className="w-full px-5 flex items-center justify-evenly pt-1 pb-2 border-b-2 border-lightGray">
        {globalElement.map((elem, index) => (
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
