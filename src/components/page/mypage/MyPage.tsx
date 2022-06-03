import MyInfo from "components/mocular/mypage/MyInfo";
import MyPageNav from "components/mocular/mypage/MyPageNav";
import useType from "components/mocular/mypage/hook/useType";
import BoardTypeNav from "components/mocular/mypage/BoardTypeNav";
import MyPageBoardMain from "./MyPageBoardMain";
import MyPageScrapMain from "./MyPageScrapMain";
import MyPageBuyMain from "./MyPageBuyMain";

export default function MyPage() {
  const { type } = useType();

  return (
    <>
      <MyInfo />
      <MyPageNav />
      <section>{type !== "buy" ? <BoardTypeNav /> : <></>}</section>
      {type === "board" && <MyPageBoardMain />}
      {type === "scrap" && <MyPageScrapMain />}
      {type === "buy" && <MyPageBuyMain />}
    </>
  );
}
