import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import LabelInput from "components/atom/input/LabelInput";
import TextArea from "components/atom/textArea";
import { useForm } from "react-hook-form";

export interface MatchForm {
  title: string;
  contents: string;
  link: string;
  people: number;
}

export default function MatchCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MatchForm>({ mode: "onSubmit" });

  const onSubmit = (data: MatchForm) => {
    console.log(data);
  };
  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <section className="w-full px-4">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-2 mt-10"
      >
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
          register={register("contents", {
            required: "내용은 필수로 입력해야 합니다.",
          })}
          error={errors.contents}
        ></TextArea>
        <LabelInput
          label="오픈채팅링크"
          labelSize="lg"
          placeholder="kakaotalk link"
          register={register("link", {
            required: "링크는 필수로 입력해야 합니다.",
          })}
        ></LabelInput>
        <div className="flex items-center w-1/2">
          <span className="w-14 text-lg">인원</span>
          <Input
            placeholder="4"
            type="number"
            register={register("people", {
              required: "사람 수는 필수로 입력해야 합니다.",
            })}
          ></Input>
        </div>

        <div className="w-full flex justify-center items-center pt-6">
          <NormalButton type="submit" size="lg" color="normalColor">
            제출하기
          </NormalButton>
        </div>
      </form>
    </section>
  );
}
