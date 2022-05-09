import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import AuthHeader from "components/mocular/auth/AuthHeader";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginForm {
  id: string;
  password: string;
}

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({ mode: "onChange" });

  const onValid = (data: LoginForm) => {};

  const onError = (error: any) => {};

  return (
    <div className="px-8 h-screen overflow-hidden">
      <AuthHeader />
      <form
        className="space-y-2 mt-5 mb-2"
        onSubmit={handleSubmit(onValid, onError)}
      >
        <LabelInput
          label={"아이디"}
          placeholder="exampleID"
          labelSize="md"
          register={register("id", { required: "아이디는 필수입니다." })}
          error={errors.id}
        />
        <LabelInput
          label={"비밀번호"}
          placeholder="*********"
          labelSize="md"
          register={register("password", {
            required: "비밀번호는 필수입니다.",
          })}
          error={errors.password}
        />
        <div className="py-3 flex flex-col items-center">
          <NormalButton type="submit" color="normalColor" size="lg">
            로그인하기
          </NormalButton>
        </div>
      </form>
      <p className="text-center">
        아직 회원이 아니신가요?{" "}
        <Link to="/regist">
          <span className="text-deepGreen">회원가입</span>{" "}
        </Link>
      </p>
    </div>
  );
}
