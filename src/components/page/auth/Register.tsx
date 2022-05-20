import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import AuthHeader from "components/mocular/auth/AuthHeader";
import LocationInput from "components/mocular/location/LocationInput";
import { useForm } from "react-hook-form";

interface RegisterForm {
  id: string;
  nickname: string;
  password: string;
  passwordValid: string;
  bigLocation: string;
  subLocation: string;
}

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<RegisterForm>({ mode: "onChange" });

  const onValid = (data: RegisterForm) => {};

  const onError = (error: any) => {};
  return (
    <div className="px-8 h-screen overflow-x-hidden">
      <AuthHeader />
      <form
        className="space-y-2 mt-5 mb-2"
        onSubmit={handleSubmit(onValid, onError)}
      >
        <LabelInput
          type="text"
          label={"아이디"}
          placeholder="exampleID"
          labelSize="md"
          register={register("id", {
            required: "아이디는 필수로 입력해야 합니다.",
          })}
          error={errors.id}
        />
        <LabelInput
          type="text"
          label={"닉네임"}
          placeholder="NickName"
          labelSize="md"
          register={register("nickname", {
            required: "닉네임은 필수로 입력해야 합니다.",
          })}
          error={errors.nickname}
        />
        <LabelInput
          type="password"
          label={"비밀번호"}
          placeholder="*********"
          labelSize="md"
          register={register("password", {
            required: "비밀번호는 필수로 입력해야 합니다.",
          })}
          error={errors.password}
        />
        <LabelInput
          type="password"
          label={"비밀번호확인"}
          placeholder="*********"
          labelSize="md"
          register={register("passwordValid", {
            required: "비밀번호 검증은 필수로 입력해야 합니다.",
          })}
          error={errors.passwordValid}
        />
        <LocationInput
          nowLoc={watch().bigLocation}
          bigLocRegister={register("bigLocation")}
          subLocRegister={register("subLocation")}
        />
        <div className="py-3 flex flex-col items-center">
          <NormalButton type="submit" color="normalColor" size="lg">
            회원가입
          </NormalButton>
        </div>
      </form>
    </div>
  );
}
