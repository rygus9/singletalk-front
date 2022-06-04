import BoardListItem from "components/mocular/board/BoardListItem";
import useSubtype from "components/mocular/mypage/hook/useSubtype";
import { useMypageScrapList } from "./hook/useMypageScrapList";

export default function MyPageScrapMain() {
  const { subtype } = useSubtype();
  const { data } = useMypageScrapList(
    `?type=${subtype === "All" ? "global" : "local"}`
  );
  return (
    <main className="mb-20 divide-y divide-gray">
      {data &&
        data.map((elem: any, index: number) => (
          <BoardListItem {...elem} key={index} />
        ))}
    </main>
  );
}
