import { postRegistApi, PostRegistApiInput } from "./../../../../util/api/post";
import { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {} from "util/api/post";
import { useMutation } from "react-query";

export default function usePostRegist() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    (newPost: PostRegistApiInput) => postRegistApi(newPost),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          navigate(`/${path.split("/")[1]}`);
        } else {
          console.log("포스트 등록에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
