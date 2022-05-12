import NormalButton from "components/atom/button/NormalButton";
import BoardListInfo from "components/mocular/board/BoardListInfo";
import ChatList from "components/mocular/chat/ChatList";
import BottomInput from "components/mocular/common/BottomInput";
import Profile from "components/mocular/common/Profile";

interface PostType {
  postId: string;
  title: string;
  content: string;
  userId: string;
  userImgSrc?: any | null;
  userNickName: string;
  isScrap: boolean;
  isJoy: boolean;
  isUseful: boolean;
  joyfulCnt: number;
  usefulCnt: number;
  commentCnt: number;
}

const data: PostType = {
  postId: "포스트1",
  title: "라면 맛있게 먹기",
  content: `혼자 라면 먹기 5년차 가끔씩 색다른 라면이 먹고 싶다면...
    물을 1/4만 넣고 스프를 1/2만 넣는다.
    라면을 다 부셔서 넣는다.
    그럼 숟가락으로 퍼먹으면 되는데 나름 색다름.`,
  userId: "유저1",
  userImgSrc: null,
  userNickName: "Cuzz",
  isScrap: false,
  isJoy: true,
  isUseful: false,
  joyfulCnt: 10,
  usefulCnt: 7,
  commentCnt: 5,
};

export default function Board() {
  return (
    <>
      <main className="px-4">
        <header className="pt-10 pb-3">
          <h2 className="text-2xl">{data.title}</h2>
        </header>
        <Profile
          nickname={data.userNickName}
          imageSrc={data.userImgSrc}
        ></Profile>
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
          >
            스크랩하기
          </NormalButton>
          <NormalButton size="sm" color={data.isJoy ? "normalColor" : "normal"}>
            재밌어요
          </NormalButton>
          <NormalButton
            size="sm"
            color={data.isUseful ? "normalColor" : "normal"}
          >
            유용해요
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
      <section className="px-4 pb-16">
        <ChatList />
      </section>
      <BottomInput />
    </>
  );
}
