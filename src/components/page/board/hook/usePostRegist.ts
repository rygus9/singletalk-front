import { PostRegistApi, PostRegistApiInput } from "./../../../../util/api/post";
import { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {} from "util/api/post";
import { useMutation } from "react-query";

export default function usePostRegist() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    (newPost: PostRegistApiInput) => PostRegistApi(newPost),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        console.log(result);
        if (result.result) {
          alert("포스트 등록이 완료되었습니다.");
          navigate(`${path.split("/")[1]}`);
        } else {
          alert("등록에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
