import { useParams } from "react-router-dom";
import { commentJoyfulApi } from "./../../../../util/api/post";
import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";

export const useCommentJoyful = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    (commentIdx: string) => commentJoyfulApi(commentIdx),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          queryClient.fetchQuery(["comments", params.postIdx!]);
        } else {
          console.log("댓글 추천에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
};
