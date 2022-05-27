import { LoginApiInput, loginApi } from "util/api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useLogin() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const { isLoading, mutate } = useMutation(
    (loginInput: LoginApiInput) => loginApi(loginInput),
    {
      onError: (error) => {
        console.log("에러 발생", error);
        setLoginError(true);
      },
      onSuccess: (result) => {
        if (result) {
          navigate("/global");
        } else {
          setLoginError(true);
          alert("로그인에 실패했어요.");
        }
      },
    }
  );
  return { loginError, isLoading, mutate };
}
