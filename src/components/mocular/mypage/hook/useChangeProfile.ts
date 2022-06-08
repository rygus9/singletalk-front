import { editProfileApi, EditProfileInput } from "util/api/mypage";
import { useMutation, useQueryClient } from "react-query";
export default function useChangeProfile(closeModal: () => void) {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    (data: EditProfileInput) => editProfileApi(data),
    {
      onError: (error) => {
        console.log("에러 발생", error);
      },
      onSuccess: (result) => {
        if (result.result) {
          queryClient.fetchQuery(["profiles"]);
          closeModal();
        } else {
          alert("중복된 닉네임입니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
