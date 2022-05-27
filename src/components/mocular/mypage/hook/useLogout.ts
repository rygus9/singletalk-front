import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "./../../../../util/api/auth";

export default function useLogout() {
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(() => logoutApi(), {
    onError: (error) => {
      const err = error as AxiosError;
      console.log("에러 발생", err.response);
    },
    onSuccess: (result) => {
      if (result.msg === "logout") {
        navigate("/login");
      } else {
        console.log("로그아웃에 실패하였습니다.");
      }
    },
  });

  return { isLoading, mutate };
}
