import { UseFormSetValue } from "react-hook-form/dist/types";
import { BoardFormType } from "../board/BoardForm";
import { GlobalCategoryKind, globalElement } from "./GlobalCategory";
import { LocalCategoryKind, localElement } from "./LocalCategory";

export default function CategorySelector({
  now,
  type,
  setValue,
}: {
  now: GlobalCategoryKind | LocalCategoryKind;
  type: "global" | "local";
  setValue: UseFormSetValue<BoardFormType>;
}) {
  let nowList;
  if (type === "global") {
    nowList = globalElement.filter((elem, index) => index !== 0);
  } else {
    nowList = localElement.filter((elem, index) => index !== 0);
  }

  return (
    <div className="w-full flex justify-evenly">
      {nowList.map((elem, index) => (
        <div key={index}>
          {elem.category === now ? (
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
          )}
        </div>
      ))}
    </div>
  );
}
