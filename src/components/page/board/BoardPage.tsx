import NormalButton from "components/atom/button/NormalButton";
import BoardDeleteModal from "components/mocular/board/BoardDeleteModal";
import BoardListInfo from "components/mocular/board/BoardListInfo";
import ChatList from "components/mocular/chat/ChatList";
import BottomInput from "components/mocular/common/BottomInput";
import Profile from "components/mocular/common/Profile";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { usePost } from "./hook/usePost";
import { usePostJoyful } from "./hook/usePostJoyful";
import { usePostScrap } from "./hook/usePostScrap";
import { usePostUseful } from "./hook/usePostUseful";

export default function Board() {
  const [open, setOpen] = useRecoilState(openState);
  const navigate = useNavigate();

  const params = useParams();
  const { data } = usePost(params.postIdx!);

  const onDeleteClick = useCallback(() => {
    setOpen({ ...open, postDeleteOpen: !open.postDeleteOpen });
  }, [setOpen, open]);

  const onUpdateClick = useCallback(() => {
    navigate("./update");
  }, [navigate]);

  const { mutate: joyfulMutate } = usePostJoyful();
  const { mutate: usefulMutate } = usePostUseful();
  const { mutate: scrapMutate } = usePostScrap();

  return (
    <>
      {data && (
        <main className="px-4">
          <header className="pt-10 pb-3">
            <h2 className="text-2xl flex items-center justify-between">
              {data.title}
              {data.isScrap && (
                <span className="text-pink-500 text-base align-middle">
                  Scrap!!
                </span>
              )}
            </h2>
          </header>
          <div className="flex items-center justify-between">
            <Profile
              nickname={data.userNickname}
              isAnonymous={data.isAnonymous}
            ></Profile>
            {data.isOwner ? (
              <div className="flex items-center space-x-2">
                <NormalButton type="button" size="sm" onClick={onUpdateClick}>
                  수정하기
                </NormalButton>
                <NormalButton type="button" size="sm" onClick={onDeleteClick}>
                  삭제하기
                </NormalButton>
              </div>
            ) : (
              <></>
            )}
          </div>
          <p className="text-black text-lg mt-5 mb-3 px-1">
            {data.content.split("\n").map((elem, index) => (
              <span key={index}>
                {elem}
                <br />
              </span>
            ))}
          </p>
          <div className="flex w-full justify-center space-x-2 mt-6">
            <NormalButton
              size="sm"
              color={data.isScrap ? "normalColor" : "normal"}
              onClick={() => scrapMutate()}
            >
              스크랩하기
            </NormalButton>
            <NormalButton
              size="sm"
              color={data.isUseful ? "normalColor" : "normal"}
              onClick={() => usefulMutate()}
            >
              유용해요
            </NormalButton>
            <NormalButton
              size="sm"
              color={data.isJoyful ? "normalColor" : "normal"}
              onClick={() => joyfulMutate()}
            >
              재밌어요
            </NormalButton>
          </div>
          <div className="pt-5 pb-5 pl-3">
            <BoardListInfo
              usefulCnt={data.usefulCnt}
              joyfulCnt={data.joyfulCnt}
              commentCnt={data.commentCnt}
            />
          </div>
        </main>
      )}

      <section className="px-4 pb-16">
        <ChatList />
      </section>
      <BottomInput />
      {open.postDeleteOpen && <BoardDeleteModal />}
    </>
  );
}
