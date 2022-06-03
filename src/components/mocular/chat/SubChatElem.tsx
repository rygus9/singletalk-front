import NormalButton from "components/atom/button/NormalButton";
import { SubChatElemProps } from "util/api/post";
import Profile from "../common/Profile";
import { useCommentDelete } from "./hook/useCommentDelete";

export default function SubChatElem(data: SubChatElemProps) {
  const { mutate } = useCommentDelete();

  const onDeleteClick = (replyIdx: number, commentId: string) =>
    mutate({
      type: replyIdx === -1 ? "comment" : "reply",
      commentId: replyIdx === -1 ? commentId : `${replyIdx}`,
    });

  return (
    <section>
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <Profile
            nickname={data.userNickname}
            isAnonymous={data.isAnonymous}
          ></Profile>
          {data.isOwner && !data.isDeleted ? (
            <div className="flex items-center space-x-2">
              <NormalButton
                type="button"
                size="sm"
                onClick={() =>
                  onDeleteClick(data.replyIdx, `${data.commentIdx}`)
                }
              >
                삭제하기
              </NormalButton>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <p className="py-3">
        {data.isDeleted
          ? "이 댓글은 삭제되었습니다."
          : data.content.split("\n").map((line, index) => {
              return (
                <span key={index}>
                  {line}
                  <br />
                </span>
              );
            })}
      </p>
    </section>
  );
}
