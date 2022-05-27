import MyInfo from "components/mocular/mypage/MyInfo";
import MyPageNav from "components/mocular/mypage/MyPageNav";
import useType from "components/mocular/mypage/hook/useType";
import BoardTypeNav from "components/mocular/mypage/BoardTypeNav";
import BoardListItem from "components/mocular/board/BoardListItem";
import { BoardListType } from "util/api/post";

export default function MyPage() {
  const { type } = useType();

  let mockData: BoardListType[] = [];

  for (let _ of [1, 2, 3, 4, 5]) {
    mockData.push({
      title: "라면 정말 맛있게 먹기",
      userId: "유저1",
      postId: "포스트1",
      userNickname: "Cuzz",
      content: "여기에는 내용이 들어갑니다.",
      modifiedDate: "2022.03.13",
      usefulCnt: 10,
      joyfulCnt: 5,
      commentCnt: 3,
    });
  }

  return (
    <>
      <MyInfo />
      <MyPageNav />
      <section>{type !== "buy" ? <BoardTypeNav /> : <></>}</section>
      <main className="mb-20 divide-y divide-gray">
        {mockData.map((elem, index) => (
          <BoardListItem {...elem} key={index} />
        ))}
      </main>
    </>
  );
}
