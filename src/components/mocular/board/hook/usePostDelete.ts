import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { postDeleteApi } from "util/api/post";

export default function usePostDelete() {
  const navigate = useNavigate();
  const params = useParams();
  const { isLoading, mutate } = useMutation(
    () => postDeleteApi(params.postIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          navigate(`/global`);
        } else {
          console.log("삭제 실패하기");
        }
      },
    }
  );

  return { isLoading, mutate };
}
