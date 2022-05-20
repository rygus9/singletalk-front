import ChatCnt from "components/atom/icon/boardInfo/ChatCnt";
import { MatchingBoardListType } from "components/page/matching/MatchList";
import { Link } from "react-router-dom";
import Profile from "../common/Profile";

export default function MatchingBoardListItem({
  ...elem
}: MatchingBoardListType) {
  return (
    <section className="pt-3 pb-1 px-3">
      <Link to={`./${elem.postId}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-deepBlack text-xl pb-2">{elem.title}</h2>
          <h3 className="text-deepBlack text-base">{`[${elem.nowPeople}/${elem.totalPeople}]`}</h3>
        </div>
        <Profile nickname={elem.userNickname}></Profile>
        <p className="py-2 min-h-[4rem] text-black">{elem.content}</p>
        <div className="flex py-1 pr-3 justify-between">
          <span className="text-lightBlack">{elem.modifiedDate}</span>
          <div className="flex items-center justify-center space-x-5">
            <ChatCnt></ChatCnt>
            <span className="text-green-600">{elem.commentCnt}</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
