import { matchingChangeApi, MatchingChangeApiInput } from "util/api/matching";
import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";

export default function useMatchingChange() {
  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    (newMatching: MatchingChangeApiInput) =>
      matchingChangeApi(newMatching, params.matchIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          navigate(-1);
        } else {
          console.log("매칭게시글 수정에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
