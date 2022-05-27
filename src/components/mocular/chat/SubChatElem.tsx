import NormalButton from "components/atom/button/NormalButton";
import Profile from "../common/Profile";

export interface SubChatElemProps {
  postId: string;
  userId: string;
  userNickName: string;
  content: string;
  isOwner: boolean;
  isDelete: boolean;
}

export default function SubChatElem(data: SubChatElemProps) {
  return (
    <section>
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <Profile nickname={data.userNickName}></Profile>
          {!data.isDelete && data.isOwner ? (
            <div className="flex items-center space-x-2">
              <NormalButton type="button" size="sm">
                수정하기
              </NormalButton>
              <NormalButton type="button" size="sm">
                삭제하기
              </NormalButton>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <p className="py-3">
        {data.isDelete
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
