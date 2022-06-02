import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { BoardType, postUsefulApi } from "util/api/post";

export const usePostUseful = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    () => postUsefulApi(params.postIdx!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (data) => {
        if (data.result) {
        } else {
          console.log("포스트 유용해요에 실패했습니다.");
        }
      },
      onMutate: () => {
        queryClient.setQueryData(
          ["posts", params.postIdx!],
          (old: BoardType | undefined) => {
            const next = old && {
              ...old,
              isUseful: !old.isUseful,
              usefulCnt: old.isUseful ? old.usefulCnt - 1 : old.usefulCnt + 1,
            };
            return next as BoardType;
          }
        );
      },
    }
  );

  return { isLoading, mutate };
};
