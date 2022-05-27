import NormalButton from "components/atom/button/NormalButton";
import MatchingModal from "components/mocular/matching/MatchingModal";
import Profile from "components/mocular/common/Profile";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";

export interface MatchType {
  postId: string;
  title: string;
  content: string;
  userId: string;
  userNickName: string;
  isOwner: boolean;
  isJoin: boolean;
  openLink: string;
}

const data: MatchType = {
  postId: "포스트1",
  title: "라면 맛있게 먹기",
  content: `혼자 라면 먹기 5년차 가끔씩 색다른 라면이 먹고 싶다면...
    물을 1/4만 넣고 스프를 1/2만 넣는다.
    라면을 다 부셔서 넣는다.
    그럼 숟가락으로 퍼먹으면 되는데 나름 색다름.`,
  userId: "유저1",
  userNickName: "Cuzz",
  isOwner: false,
  isJoin: false,
  openLink: "opensource Link",
};

export default function MatchPage() {
  const [open, setOpen] = useRecoilState(openState);

  const onMatchingClick = useCallback(() => {
    setOpen({ ...open, matchingOpen: !open.matchingOpen });
  }, [open, setOpen]);

  return (
    <>
      <main className="px-4">
        <header className="pt-10 pb-3">
          <h2 className="text-2xl">{data.title}</h2>
          {data.isOwner ? (
            <div className="flex items-center justify-center space-x-4 pt-5">
              <NormalButton size="sm">수정하기</NormalButton>
              <NormalButton size="sm">삭제하기</NormalButton>
            </div>
          ) : (
            <></>
          )}
        </header>
        <Profile nickname={data.userNickName}></Profile>
        <p className="text-black text-lg mt-5 mb-3 px-1 min-h-[12rem]">
          {data.content.split("\n").map((elem, index) => (
            <span key={index}>
              {elem}
              <br />
            </span>
          ))}
        </p>
        <div className="flex items-center justify-center pt-6">
          {data.isOwner ? (
            <NormalButton onClick={onMatchingClick}>매칭관리</NormalButton>
          ) : data.isJoin ? (
            <div className="flex flex-col justify-center">
              <div className="text-xl text-black pb-2">
                등록되었습니다.&nbsp;{data.openLink}
              </div>
              <div className="flex justify-center">
                <NormalButton>매칭 취소</NormalButton>
              </div>
            </div>
          ) : (
            <NormalButton>매칭 등록</NormalButton>
          )}
        </div>
      </main>
      {open.matchingOpen && <MatchingModal />}
    </>
  );
}
