import { BoardForm } from "components/page/board/BoardCreate";
import { UseFormSetValue } from "react-hook-form/dist/types";
import { GlobalCategoryKind, globalElement } from "./GlobalCategory";
import { LocalCategoryKind, localElement } from "./LocalCategory";

export default function CategorySelector({
  now,
  type,
  setValue,
}: {
  now: GlobalCategoryKind | LocalCategoryKind;
  type: "global" | "local";
  setValue: UseFormSetValue<BoardForm>;
}) {
  let nowList;
  if (type === "global") {
    nowList = globalElement;
  } else {
    nowList = localElement;
  }

  return (
    <div className="w-full flex justify-evenly">
      {nowList.map((elem) =>
        elem.category === now ? (
          <button
            onClick={() => setValue("category", elem.category)}
            type="button"
          >
            {elem.coloredElement}
          </button>
        ) : (
          <button
            onClick={() => setValue("category", elem.category)}
            type="button"
          >
            {elem.element}
          </button>
        )
      )}
    </div>
  );
}
