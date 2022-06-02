import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import LabelCheckBox from "components/atom/selectBox/LabelCheckBox";
import TextArea from "components/atom/textArea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BoardType } from "util/api/post";
import CategorySelector from "../boardCategory/CategorySelector";
import { GlobalCategoryKind } from "../boardCategory/GlobalCategory";
import { LocalCategoryKind } from "../boardCategory/LocalCategory";

export interface BoardFormType {
  title: string;
  content: string;
  category: LocalCategoryKind | GlobalCategoryKind;
  isAnonymous: boolean;
}

export default function BoardForm({
  onSubmit,
  board,
  type,
}: {
  onSubmit: (data: any) => void;
  board?: BoardType;
  type: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BoardFormType>({ mode: "onSubmit" });

  const onError = (err: any) => {
    console.log(err);
  };

  useEffect(() => {
    setValue("category", "all");

    if (board) {
      console.log(board);
      setValue("title", board.title);
      setValue("content", board.content);
      setValue("isAnonymous", board.isAnonymous);
      setValue(
        "category",
        board.category as LocalCategoryKind | GlobalCategoryKind
      );
    }
  }, [setValue, board]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-2 mt-2">
      <LabelInput
        label="제목"
        labelSize="lg"
        placeholder="제목을 입력하세요"
        register={register("title", {
          required: "제목은 필수로 입력해야 합니다.",
        })}
        error={errors.title}
      ></LabelInput>
      <TextArea
        label="내용"
        register={register("content", {
          required: "내용은 필수로 입력해야 합니다.",
        })}
        error={errors.content}
      ></TextArea>
      <div className="text-xl">카테고리</div>
      <CategorySelector
        type={type as "global" | "local"}
        now={watch().category}
        setValue={setValue}
      />
      <LabelCheckBox
        label={"익명 여부"}
        register={register("isAnonymous")}
      ></LabelCheckBox>

      <div className="w-full flex justify-center items-center pt-6 pb-10">
        <NormalButton type="submit" size="lg" color="normalColor">
          제출하기
        </NormalButton>
      </div>
    </form>
  );
}
