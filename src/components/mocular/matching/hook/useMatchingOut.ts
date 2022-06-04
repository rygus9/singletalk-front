import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { matchingOutApi } from "util/api/matching";

export default function useMatchingOut() {
  const params = useParams();
  const queryCliet = useQueryClient();

  const { isLoading, mutate } = useMutation(
    (userId: string) => matchingOutApi(params.matchIdx!, userId),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          alert("해당 유저를 탈퇴시켰습니다.");
          queryCliet.fetchQuery(["matchingRoom", params.matchIdx!]);
        } else {
          console.log("매칭게시글 강퇴에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
