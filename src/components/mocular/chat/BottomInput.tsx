import Plus from "components/atom/icon/common/Plus";
import Input from "components/atom/input";
import LabelCheckBox from "components/atom/selectBox/LabelCheckBox";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { inputChatState, InputChatStateTypes } from "recoil/inputChatState";
import { cls } from "util/utils";
import { useCommentRegist } from "./hook/useCommentRegist";

interface CommentForm {
  isAnonymous: boolean;
  content: string;
}

export default function BottomInput() {
  const { register, handleSubmit, setValue } = useForm<CommentForm>();
  const [chatState, setChatState] =
    useRecoilState<InputChatStateTypes>(inputChatState);

  const params = useParams();
  const { mutate, isLoading } = useCommentRegist();

  useEffect(() => {
    if (params.postIdx) {
      setChatState({ ...chatState, postingIdx: params.postIdx });
    }
  }, [params]);

  const onValid = (data: CommentForm) => {
    if (!data.content) return;
    mutate({
      ...data,
      commentIdx: chatState.commentIdx,
      postingIdx: chatState.commentIdx ? null : chatState.postingIdx,
    });
    setValue("content", "");
  };

  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <form
      className={cls(
        "fixed z-40 bg-stone-200 bottom-0 w-full max-w-[30rem] flex items-center justify-around py-2 pl-1"
      )}
      onSubmit={handleSubmit(onValid, onError)}
    >
      <div className="ml-1">
        <LabelCheckBox
          label="익명"
          register={register("isAnonymous")}
        ></LabelCheckBox>
      </div>
      <div className="flex-auto mx-2">
        <Input placeholder="댓글 입력" register={register("content")}></Input>
      </div>
      <div>
        <button
          type="submit"
          className="p-2 bg-white mr-2 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-8 border-t-deepGray rounded-full animate-spin"></div>
          ) : (
            <Plus />
          )}
        </button>
      </div>
    </form>
  );
}
