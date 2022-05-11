import { BoardListType } from "components/page/board/GlobalBoardList";
import Profile from "../common/Profile";
import BoardListInfo from "./BoardListInfo";

export default function BoardListItem({ ...elem }: BoardListType) {
  return (
    <section className="pt-3 pb-1">
      <h2 className="text-deepBlack text-xl pb-2">{elem.title}</h2>
      <Profile nickname={elem.memberNickname}></Profile>
      <p className="py-2 min-h-[4rem] text-black">{elem.content}</p>
      <div className="flex py-1 pr-3 justify-between">
        <span className="text-lightBlack">{elem.modifiedDate}</span>
        <BoardListInfo
          usefulCnt={elem.usefulCnt}
          joyfulCnt={elem.joyfulCnt}
          commentCnt={elem.commentCnt}
        />
      </div>
    </section>
  );
}