import MatchingBoardListItem from "components/mocular/matching/MatchingBoardListItem";
import { useMypageMatchingList } from "./hook/useMypageMatching";

export default function MyPageBuyMain() {
  const { data } = useMypageMatchingList();

  return (
    <main className="mb-20 divide-y divide-gray">
      {data && data.map((elem: any) => <MatchingBoardListItem {...elem} />)}
    </main>
  );
}
