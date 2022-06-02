import { postChangeApi, PostRegistApiInput } from "./../../../../util/api/post";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

export default function usePostUpdate() {
  const params = useParams();
  const navigate = useNavigate();

  const postUpgrade = (newPost: PostRegistApiInput) =>
    postChangeApi(newPost, params.postIdx!);

  const { isLoading, mutate } = useMutation(
    (newPost: PostRegistApiInput) => postUpgrade(newPost),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        if (result) {
          navigate(-1);
        } else {
          console.log("등록에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
