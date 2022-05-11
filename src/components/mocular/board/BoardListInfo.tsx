import ChatCnt from "components/atom/icon/boardInfo/ChatCnt";
import Good from "components/atom/icon/boardInfo/Good";
import Star from "components/atom/icon/boardInfo/Star";

export default function BoardListInfo({
  usefulCnt,
  joyfulCnt,
  commentCnt,
}: {
  usefulCnt: number;
  joyfulCnt: number;
  commentCnt: number;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Star />
      <span className="text-yellow-300">{usefulCnt}</span>
      <Good />
      <span className="text-red-500">{joyfulCnt}</span>
      <ChatCnt />
      <span className="text-green-600">{commentCnt}</span>
    </div>
  );
}
