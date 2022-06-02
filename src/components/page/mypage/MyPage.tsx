import MyInfo from "components/mocular/mypage/MyInfo";
import MyPageNav from "components/mocular/mypage/MyPageNav";
import useType from "components/mocular/mypage/hook/useType";
import BoardTypeNav from "components/mocular/mypage/BoardTypeNav";

export default function MyPage() {
  const { type } = useType();

  return (
    <>
      <MyInfo />
      <MyPageNav />
      <section>{type !== "buy" ? <BoardTypeNav /> : <></>}</section>
      <main className="mb-20 divide-y divide-gray"></main>
    </>
  );
}
