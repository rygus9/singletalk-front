import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import LabelCheckBox from "components/atom/selectBox/LabelCheckBox";
import TextArea from "components/atom/textArea";
import CategorySelector from "components/mocular/boardCategory/CategorySelector";
import { GlobalCategoryKind } from "components/mocular/boardCategory/GlobalCategory";
import { LocalCategoryKind } from "components/mocular/boardCategory/LocalCategory";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

export interface BoardForm {
  title: string;
  content: string;
  category: LocalCategoryKind | GlobalCategoryKind;
  isAnonymous: boolean;
}

export default function BoardCreate() {
  const location = useLocation();
  const [nowBoard, setNowBoard] = useState("");

  useEffect(() => {
    const path = location.pathname;
    setNowBoard(path.split("/")[1]);
  }, [location, setNowBoard]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BoardForm>();

  const onSubmit = (data: BoardForm) => {
    console.log(data);
  };
  const onError = (err: any) => {
    console.log(err);
  };

  useEffect(() => {
    setValue("category", "all");
  }, [setValue]);

  return (
    <section className="w-full px-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl py-4 text-deepBlack">
          {nowBoard === "globalBoard" ? "전체 게시글" : "지역 게시글"}
        </h1>
        <Link
          to={
            nowBoard === "globalBoard"
              ? "/localBoard/create"
              : "/globalBoard/create"
          }
          className="flex items-center text-lightBlack"
        >
          {nowBoard === "globalBoard" ? "지역 게시글" : "전체 게시글"} 쓰기
          &nbsp; &gt;
        </Link>
      </header>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-2">
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
          type="global"
          now={watch().category}
          setValue={setValue}
        />
        <LabelCheckBox
          label={"익명 여부"}
          register={register("isAnonymous")}
        ></LabelCheckBox>

        <div className="w-full flex justify-center items-center pt-6">
          <NormalButton type="submit" size="lg" color="normalColor">
            제출하기
          </NormalButton>
        </div>
      </form>
    </section>
  );
}
