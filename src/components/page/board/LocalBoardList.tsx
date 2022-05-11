import BoardListItem from "components/mocular/board/BoardListItem";
import BoardNav from "components/mocular/boardCategory/BoardNav";
import LocalCategory from "components/mocular/boardCategory/LocalCategory";
import FloatingButton from "components/mocular/common/FloatingButton";
import { BoardListType } from "./GlobalBoardList";

export default function LocalBoardList() {
  let mockData: BoardListType[] = [];

  for (let _ of [1, 2, 3, 4, 5]) {
    mockData.push({
      title: "라면 정말 맛있게 먹기",
      memberId: "유저1",
      memberNickname: "Cuzz",
      memberImgSrc: null,
      content: "여기에는 내용이 들어갑니다.",
      modifiedDate: "2022.03.13",
      usefulCnt: 10,
      joyfulCnt: 5,
      commentCnt: 3,
    });
  }

  return (
    <div>
      <aside className="fixed z-40 max-w-[30rem] w-full bg-white">
        <LocalCategory />
        <BoardNav />
      </aside>
      <div className="flex flex-col h-[calc(100vh-2.9rem)]">
        <div className="flex-none basis-[10.8rem]"></div>
        <main className="flex-auto divide-y divide-gray px-3 overflow-scroll">
          {mockData.map((elem, index) => (
            <BoardListItem {...elem} key={index} />
          ))}
        </main>
        <div className="flex-none basis-[4.8rem]"></div>
      </div>
      <FloatingButton to={"./create"} />
    </div>
  );
}
