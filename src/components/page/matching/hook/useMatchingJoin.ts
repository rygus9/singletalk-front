import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { matchingJoinApi } from "util/api/matching";

export default function useMatchingJoin() {
  const queryClient = useQueryClient();
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    () => matchingJoinApi(params.matchIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          queryClient.fetchQuery(["matchings", params.matchIdx!]);
        } else {
          console.log("매칭게시글 조인에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
