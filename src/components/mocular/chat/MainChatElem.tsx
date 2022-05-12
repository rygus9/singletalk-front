import NormalButton from "components/atom/button/NormalButton";
import ChatInfo from "./ChatInfo";
import SubChatElem, { SubChatElemProps } from "./SubChatElem";

interface MainChatElemProps extends SubChatElemProps {
  joyfulCnt: number;
  commentCnt: number;
}

export default function MainChat(data: MainChatElemProps) {
  return (
    <div>
      <SubChatElem {...data} />
      <nav className="flex justify-between items-center pb-3">
        <ChatInfo joyfulCnt={data.joyfulCnt} commentCnt={data.commentCnt} />
        <div className="flex space-x-2">
          <NormalButton type="button" size="sm">
            재밌어요
          </NormalButton>
          <NormalButton type="button" size="sm">
            대댓글
          </NormalButton>
        </div>
      </nav>
    </div>
  );
}
