import Plus from "components/atom/icon/Plus";
import Input from "components/atom/input";
import LabelCheckBox from "components/atom/selectBox/LabelCheckBox";
import { useForm } from "react-hook-form";
import { cls } from "util/utils";

interface CommentForm {
  isAnonymous: boolean;
  comment: string;
}

export default function BottomInput() {
  const { register, handleSubmit } = useForm<CommentForm>();

  const onValid = (data: CommentForm) => {
    console.log(data);
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
        <Input placeholder="댓글 입력" register={register("comment")}></Input>
      </div>
      <div>
        <button type="submit" className="p-3 bg-white mr-2 rounded-lg">
          <Plus />
        </button>
      </div>
    </form>
  );
}
