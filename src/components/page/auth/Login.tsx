import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import AuthHeader from "components/mocular/auth/AuthHeader";
import LoadingText from "components/mocular/common/LoadingText";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginApiInput } from "util/api/auth";
import useLogin from "./hook/useLogin";

type LoginForm = LoginApiInput;

export default function Login() {
  const { loginError, isLoading, mutate } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({ mode: "onChange" });

  const onValid = (data: LoginForm) => {
    mutate(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <div className="px-8 h-screen overflow-hidden">
      <AuthHeader />
      <form
        className="space-y-2 mt-5 mb-2"
        onSubmit={handleSubmit(onValid, onError)}
      >
        <LabelInput
          label={"아이디"}
          type="text"
          placeholder="exampleID"
          labelSize="md"
          register={register("userID", { required: "아이디는 필수입니다." })}
          error={errors.userID}
        />
        <LabelInput
          label={"비밀번호"}
          type="password"
          placeholder="*********"
          labelSize="md"
          register={register("password", {
            required: "비밀번호는 필수입니다.",
          })}
          error={errors.password}
        />
        <div className="py-3 flex flex-col items-center">
          {loginError && (
            <span className="text-sm text-red-500 pb-2">
              아이디 또는 비밀번호가 잘못되었습니다.
            </span>
          )}
          <NormalButton type="submit" color="normalColor" size="lg">
            {isLoading ? <LoadingText text="로그인 중" /> : "로그인하기"}
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
