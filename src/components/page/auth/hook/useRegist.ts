import { registApi, RegistApiInput } from "util/api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useRegist() {
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
        if (result) {
          console.log(result);
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        } else {
          setRegistError(true);
          alert("회원 가입에 실패했어요.");
        }
      },
    }
  );
  return { registError, isLoading, mutate };
}
