import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { BoardType, postJoyfulApi } from "util/api/post";

export const usePostJoyful = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    () => postJoyfulApi(params.postIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
        } else {
          console.log("포스트 재밌어요에 실패했습니다.");
        }
      },
      onMutate: () => {
        queryClient.setQueryData(
          ["posts", params.postIdx!],
          (old: BoardType | undefined) => {
            const next = old && {
              ...old,
              isJoyful: !old.isJoyful,
              joyfulCnt: old.isJoyful ? old.joyfulCnt - 1 : old.joyfulCnt + 1,
            };
            return next as BoardType;
          }
        );
      },
    }
  );

  return { isLoading, mutate };
};
