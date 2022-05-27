import ChatCnt from "components/atom/icon/boardInfo/ChatCnt";
import Good from "components/atom/icon/boardInfo/Good";

export default function BoardListInfo({
  joyfulCnt,
  commentCnt,
  isDelete,
}: {
  joyfulCnt: number;
  commentCnt: number;
  isDelete: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      {isDelete ? (
        <></>
      ) : (
        <>
          <Good />
          <span className="text-red-500">{joyfulCnt}</span>
        </>
      )}
      <ChatCnt />
      <span className="text-green-600">{commentCnt}</span>
    </div>
  );
}
