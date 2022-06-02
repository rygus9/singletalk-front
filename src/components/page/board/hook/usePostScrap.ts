import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { BoardType, postScrapApi } from "util/api/post";

export const usePostScrap = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    () => postScrapApi(params.postIdx!),
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
              isScrap: !old.isScrap,
            };
            return next as BoardType;
          }
        );
      },
    }
  );

  return { isLoading, mutate };
};
