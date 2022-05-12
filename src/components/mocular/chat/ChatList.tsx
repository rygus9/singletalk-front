import MainChatElem from "./MainChatElem";
import SubChatElem from "./SubChatElem";

const data = [
  {
    commentId: "댓글1",
    postId: "포스트1",
    userId: "유저1",
    userImgSrc: null,
    userNickName: "Cuzz",
    content: `아 정말 귀찮다. 그림 그리기 싫다.
              재밌겠다. 으아아아아앙`,
    joyfulCnt: 10,
    commentCnt: 2,
    answers: [
      {
        commentId: "댓글1",
        postId: "포스트1",
        userId: "유저1",
        userImgSrc: null,
        userNickName: "Cuzz",
        content: `아 정말 귀찮다. 그림 그리기 싫다.
              재밌겠다. 으아아아아앙`,
      },
      {
        commentId: "댓글1",
        postId: "포스트1",
        userId: "유저1",
        userImgSrc: null,
        userNickName: "Cuzz",
        content: `아 정말 귀찮다. 그림 그리기 싫다.
                재밌겠다. 으아아아아앙`,
      },
    ],
  },
  {
    commentId: "댓글1",
    postId: "포스트1",
    userId: "유저1",
    userImgSrc: null,
    userNickName: "Cuzz",
    content: `아 정말 귀찮다. 그림 그리기 싫다.
            재밌겠다. 으아아아아앙`,
    joyfulCnt: 10,
    commentCnt: 5,
  },
];

export default function ChatList() {
  return (
    <div className="divide-y divide-deepGray border-y border-deepGray">
      {data.map((elem, index) => (
        <div key={`${index} mainChat`}>
          <MainChatElem {...elem} />
          {elem.answers && (
            <div className="pl-5 divide-y divide-deepGray">
              {elem.answers.map((subElem, subIndex) => (
                <div key={`${subIndex} subChat`}>
                  <SubChatElem {...subElem} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
