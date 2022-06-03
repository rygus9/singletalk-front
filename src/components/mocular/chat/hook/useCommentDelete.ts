import { useParams } from "react-router-dom";
import {
  CommentDeleteApiInput,
  commentDeleteApi,
} from "./../../../../util/api/post";
import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
export const useCommentDelete = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    (elem: CommentDeleteApiInput) => commentDeleteApi(elem),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
          queryClient.fetchQuery(["comments", params.postIdx!]);
        } else {
          console.log("댓글 삭제에 실패했습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
};
