import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { matchingDeleteApi } from "util/api/matching";

export default function useMatchingDelete() {
  const navigate = useNavigate();
  const params = useParams();
  const { isLoading, mutate } = useMutation(
    () => matchingDeleteApi(params.matchIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          navigate(`/matching`);
        } else {
          console.log("삭제 실패하기");
        }
      },
    }
  );

  return { isLoading, mutate };
}
