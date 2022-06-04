import NormalButton from "components/atom/button/NormalButton";
import MatchingModal from "components/mocular/matching/MatchingModal";
import Profile from "components/mocular/common/Profile";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { useMatching } from "./hook/useMatching";
import { useNavigate, useParams } from "react-router-dom";
import useMatchingJoin from "./hook/useMatchingJoin";
import MatchingDeleteModal from "components/mocular/matching/MatchingDeleteModal";

export default function MatchPage() {
  const [open, setOpen] = useRecoilState(openState);
  const navigate = useNavigate();

  const onMatchingClick = useCallback(() => {
    setOpen({ ...open, matchingOpen: !open.matchingOpen });
  }, [open, setOpen]);

  const params = useParams();

  const { data } = useMatching(params.matchIdx!);
  const { mutate } = useMatchingJoin();

  const onChangeClick = useCallback(() => {
    navigate("./update");
  }, [navigate]);

  const onDeleteClick = useCallback(() => {
    setOpen({ ...open, matchingDeleteOpen: !open.matchingDeleteOpen });
  }, [open, setOpen]);

  return (
    <>
      <main className="px-4">
        <header className="pt-10 pb-3">
          <h2 className="text-2xl">{data?.title}</h2>
          {data?.isOwner ? (
            <div className="flex items-center justify-center space-x-4 pt-5">
              <NormalButton size="sm" onClick={onChangeClick}>
                수정하기
              </NormalButton>
              <NormalButton size="sm" onClick={onDeleteClick}>
                삭제하기
              </NormalButton>
            </div>
          ) : (
            <></>
          )}
        </header>
        <Profile nickname={data?.user.nickname!}></Profile>
        <p className="text-black text-lg mt-5 mb-3 px-1 min-h-[12rem]">
          {data?.content.split("\n").map((elem, index) => (
            <span key={index}>
              {elem}
              <br />
            </span>
          ))}
        </p>
        <div className="flex items-center justify-center pt-6">
          {data?.isOwner ? (
            <NormalButton onClick={onMatchingClick}>매칭관리</NormalButton>
          ) : data?.isJoin ? (
            <div className="flex flex-col justify-center">
              <div className="text-xl text-black pb-2">
                등록되었습니다.&nbsp;{data?.link}
              </div>
              <div className="flex justify-center">
                <NormalButton onClick={() => mutate()}>매칭 취소</NormalButton>
              </div>
            </div>
          ) : (
            <NormalButton onClick={() => mutate()}>매칭 등록</NormalButton>
          )}
        </div>
      </main>
      {open.matchingOpen && <MatchingModal />}
      {open.matchingDeleteOpen && <MatchingDeleteModal />}
    </>
  );
}
