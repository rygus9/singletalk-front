import BoardListItem from "components/mocular/board/BoardListItem";
import useSubtype from "components/mocular/mypage/hook/useSubtype";
import { useMypagePostList } from "./hook/useMyPageBoard";

export default function MyPageBoardMain() {
  const { subtype } = useSubtype();
  const { data } = useMypagePostList(
    `?type=${subtype === "All" ? "global" : "local"}`
  );

  return (
    <main className="mb-20 divide-y divide-gray">
      {data && data.map((elem: any) => <BoardListItem {...elem} />)}
    </main>
  );
}
