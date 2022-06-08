import { registApi, RegistApiInput } from "util/api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseFormSetError } from "react-hook-form/dist/types/form";
import { RegisterForm } from "../Register";

export default function useRegist(setError: UseFormSetError<RegisterForm>) {
  const navigate = useNavigate();
  const [registError, setRegistError] = useState(false);

  const { isLoading, mutate } = useMutation(
    (registInput: RegistApiInput) => registApi(registInput),
    {
      onError: (error) => {
        console.log("에러 발생", error);
        setRegistError(true);
      },
      onSuccess: (result) => {
        console.log(result);
        if (result.result === 0) {
          console.log(result);
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        } else if (result.result === 1) {
          setRegistError(true);
          setError("id", { message: "중복된 아이디입니다." });
        } else {
          setRegistError(true);
          setError("nickname", { message: "중복된 닉네임입니다." });
        }
      },
    }
  );
  return { registError, isLoading, mutate };
}
