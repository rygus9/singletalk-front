import { cls } from "util/utils";
import useType from "./hook/useType";

export type MypageBoardType = "board" | "scrap" | "buy";

export default function MyPageNav() {
  const navElem: { text: string; type: MypageBoardType }[] = [
    { text: "내 게시글", type: "board" },
    { text: "내 스크랩", type: "scrap" },
    { text: "내 공동구매", type: "buy" },
  ];

  const { type, onTypeSet } = useType();

  return (
    <nav className="pt-2">
      <ul className="list-none flex items-center text-center cursor-pointer">
        {navElem.map((elem) => (
          <li
            key={elem.text}
            className={cls(
              "w-full pb-2",
              type === elem.type
                ? "border-deepGreen text-deepGreen border-b-2"
                : "border-gray border-b"
            )}
            onClick={() => onTypeSet(elem.type)}
          >
            {elem.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
