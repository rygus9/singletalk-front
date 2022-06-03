import NormalButton from "components/atom/button/NormalButton";
import { useRecoilState } from "recoil";
import { inputChatState, InputChatStateTypes } from "recoil/inputChatState";
import { MainChatElemProps } from "util/api/post";
import ChatInfo from "./ChatInfo";
import { useCommentJoyful } from "./hook/useCommentJoyful";
import SubChatElem from "./SubChatElem";

export default function MainChat(data: MainChatElemProps) {
  const [chatState, setChatState] =
    useRecoilState<InputChatStateTypes>(inputChatState);

  const onSubchatClick = (commentIdx: string) => {
    if (!chatState.commentIdx) {
      setChatState({ ...chatState, commentIdx: commentIdx });
    } else {
      setChatState({ ...chatState, commentIdx: null });
    }
  };

  const { mutate } = useCommentJoyful();

  const LikeClick = (commentIdx: number) => {
    mutate(`${commentIdx}`);
  };

  return (
    <div>
      <SubChatElem replyIdx={-1} isDeleted={data.isDelete} {...data} />
      <nav className="flex justify-between items-center pb-3">
        <ChatInfo
          isDelete={data.isDelete}
          joyfulCnt={data.joyfulCnt}
          commentCnt={data.replyCnt}
        />
        <div className="flex space-x-2">
          {data.isDelete ? (
            <></>
          ) : data.isJoyful ? (
            <NormalButton
              type="button"
              size="sm"
              color="normalColor"
              onClick={() => LikeClick(data.commentIdx)}
            >
              재밌어요
            </NormalButton>
          ) : (
            <NormalButton
              type="button"
              size="sm"
              onClick={() => LikeClick(data.commentIdx)}
            >
              재밌어요
            </NormalButton>
          )}
          {chatState.commentIdx &&
          chatState.commentIdx === `${data.commentIdx}` ? (
            <NormalButton
              type="button"
              size="sm"
              color="normalColor"
              onClick={() => onSubchatClick(`${data.commentIdx}`)}
            >
              대댓글
            </NormalButton>
          ) : (
            <NormalButton
              type="button"
              size="sm"
              onClick={() => onSubchatClick(`${data.commentIdx}`)}
            >
              대댓글
            </NormalButton>
          )}
        </div>
      </nav>
    </div>
  );
}
