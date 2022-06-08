import { Link } from "react-router-dom";
import { BoardListType } from "util/api/post";
import Profile from "../common/Profile";
import BoardListInfo from "./BoardListInfo";

export default function BoardListItem({ ...elem }: BoardListType) {
  return (
    <section className="pt-3 pb-1 px-3">
      <Link to={`/board/${elem.postingIdx}`}>
        <h2 className="text-deepBlack text-xl pb-2">{elem.title}</h2>
        <Profile
          nickname={elem.userNickname}
          isAnonymous={elem.isAnonymous}
        ></Profile>
        <p className="py-2 min-h-[4rem] text-black">{elem.content}</p>
        <div className="flex py-1 pr-3 justify-between">
          <span className="text-lightBlack">
            {elem.updatedAt.split("T")[0]}
          </span>
          <BoardListInfo
            usefulCnt={elem.usefulCnt}
            joyfulCnt={elem.joyfulCnt}
            commentCnt={elem.commentCnt}
          />
        </div>
      </Link>
    </section>
  );
}
