import { Link } from "react-router-dom";
import { MatchingType } from "util/api/matching";
import { cls } from "util/utils";
import Profile from "../common/Profile";

export default function MatchingBoardListItem({ ...elem }: MatchingType) {
  return (
    <section className="pt-3 pb-1 px-3">
      <Link to={`/matching/${elem.matchingIdx}`}>
        <div className="flex justify-between items-center">
          <h2 className={cls("text-deepBlack text-xl pb-2")}>{elem.title}</h2>
          <div>
            {elem.Done ? (
              <span className="text-pink-600">매칭 완료!</span>
            ) : (
              <></>
            )}
            <h3 className="text-deepBlack text-base">{`[${elem.nowPeople}/${elem.maxPeople}]`}</h3>
          </div>
        </div>
        <Profile nickname={elem.user.nickname}></Profile>
        <p className="py-2 min-h-[4rem] text-black">{elem.content}</p>
        <div className="flex py-1 pr-3 justify-between">
          <span className="text-lightBlack">
            {elem.updatedAt.split("T")[0]}
          </span>
        </div>
      </Link>
    </section>
  );
}
