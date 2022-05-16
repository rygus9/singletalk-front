import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import LabelCheckBox from "components/atom/selectBox/LabelCheckBox";
import MatchingBoardListItem from "components/mocular/board/MatchingBoardListItem";
import LocationUI from "components/mocular/boardCategory/LocationUI";
import FloatingButton from "components/mocular/common/FloatingButton";
import { BoardListType } from "../board/GlobalBoardList";

export default function LocalBoardList() {
  let mockData: BoardListType[] = [];

  for (let _ of [1, 2, 3, 4, 5]) {
    mockData.push({
      title: "라면 정말 맛있게 먹기",
      userId: "유저1",
      postId: "포스트1",
      userNickname: "Cuzz",
      userImgSrc: null,
      content: "여기에는 내용이 들어갑니다.",
      modifiedDate: "2022.03.13",
      usefulCnt: 10,
      joyfulCnt: 5,
      commentCnt: 3,
    });
  }

  return (
    <div>
      <aside className="fixed z-40 max-w-[30rem] w-full bg-white shadow-sm">
        <div className="pl-3 pt-2">
          <LocationUI />
          <form action="" className="mt-3 space-y-2 py-2">
            <Input placeholder="제목을 입력하세요."></Input>
            <div className="flex items-center justify-between">
              <LabelCheckBox
                label="모집안한 게시글 보기"
                labelSize="sm"
              ></LabelCheckBox>
              <NormalButton type="submit">검색</NormalButton>
            </div>
          </form>
        </div>
      </aside>
      <div className="flex flex-col h-[calc(100vh-3rem)]">
        <div className="flex-none basis-[9rem]"></div>
        <main className="flex-auto divide-y divide-gray px-3 overflow-scroll">
          {mockData.map((elem, index) => (
            <MatchingBoardListItem {...elem} key={index} />
          ))}
        </main>
        <div className="flex-none basis-[4.8rem]"></div>
      </div>
      <FloatingButton to={"./create"} />
    </div>
  );
}
