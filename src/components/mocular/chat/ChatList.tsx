import { useParams } from "react-router-dom";
import { useComment } from "./hook/useComment";
import MainChatElem from "./MainChatElem";
import SubChatElem from "./SubChatElem";

export default function ChatList() {
  const params = useParams();
  const { data } = useComment(params.postIdx!);

  return (
    <div className="divide-y divide-deepGray border-y border-deepGray">
      {data &&
        data.map((elem, index) => (
          <div key={`${index} mainChat`}>
            <MainChatElem {...elem} />
            {elem.answers && (
              <div className="pl-5 divide-y divide-deepGray border-t border-deepGray">
                {elem.answers.map((subElem, subIndex) => (
                  <div key={`${subIndex} subChat`}>
                    <SubChatElem {...subElem} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      {data && data.length === 0 && (
        <div className="text-center">
          <h3 className="text-xl text-lightBlack py-10">
            아직 댓글이 없습니다.
          </h3>
        </div>
      )}
    </div>
  );
}
