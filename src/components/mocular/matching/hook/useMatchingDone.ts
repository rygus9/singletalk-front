import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { matchingDoneApi } from "util/api/matching";

export default function useMatchingDone() {
  const navigate = useNavigate();
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    () => matchingDoneApi(params.matchIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          alert("매칭을 확정하셨습니다.");
          navigate("/matching");
        } else {
          console.log("매칭게시글 확정에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
