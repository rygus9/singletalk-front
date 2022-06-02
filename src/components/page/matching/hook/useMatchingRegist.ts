import { matchingRegistApi, MatchingRegistApiInput } from "util/api/matching";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

export default function useMatchingRegist() {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    (newMatching: MatchingRegistApiInput) => matchingRegistApi(newMatching),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          navigate(-1);
        } else {
          console.log("매칭게시글 등록에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
