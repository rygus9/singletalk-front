import { cls } from "util/utils";
import useSort from "./hook/useSort";

export type BoardSortType = "useful" | "joyful" | "all";

export default function BoardNav() {
  const navElem: { text: string; sort: BoardSortType }[] = [
    { text: "모두보기", sort: "all" },
    { text: "유용해요", sort: "useful" },
    { text: "재밌어요", sort: "joyful" },
  ];

  const { sort, onSortSet } = useSort();

  return (
    <nav className="pt-2">
      <ul className="list-none flex items-center text-center cursor-pointer">
        {navElem.map((elem) => (
          <li
            key={elem.text}
            className={cls(
              "w-full pb-2",
              sort === elem.sort
                ? "border-deepGreen text-deepGreen border-b-2"
                : "border-gray border-b"
            )}
            onClick={() => onSortSet(elem.sort)}
          >
            {elem.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
