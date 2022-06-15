import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import AuthHeader from "components/mocular/auth/AuthHeader";
import LoadingText from "components/mocular/common/LoadingText";
import LocationInput from "components/mocular/location/LocationInput";
import { useForm } from "react-hook-form";
import useRegist from "./hook/useRegist";

export interface RegisterForm {
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
    setError,
    setValue,
  } = useForm<RegisterForm>({ mode: "onChange" });

  const { registError, mutate, isLoading } = useRegist(setError);

  const onValid = (data: RegisterForm) => {
    if (data.password !== data.passwordValid) {
      setError("password", { message: "비밀번호가 일치하지 않습니다." });
      setError("passwordValid", { message: "비밀번호가 일치하지 않습니다." });
      return;
    }

    let inputLocation;

    if (data.subLocation) {
      inputLocation = data.bigLocation + " " + data.subLocation;
    } else {
      inputLocation = data.bigLocation;
    }

    const inputData = {
      userID: data.id,
      nickname: data.nickname,
      password: data.password,
      region: inputLocation,
    };

    mutate(inputData);
  };

  const onError = (error: any) => {
    console.log(error);
  };

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
          {registError && (
            <span className="text-sm text-red-500 pb-2">
              회원가입에 실패했습니다.
            </span>
          )}
          <NormalButton type="submit" color="normalColor" size="lg">
            {isLoading ? (
              <LoadingText text={"회원가입 중"}></LoadingText>
            ) : (
              "회원가입"
            )}
          </NormalButton>
        </div>
      </form>
    </div>
  );
}
