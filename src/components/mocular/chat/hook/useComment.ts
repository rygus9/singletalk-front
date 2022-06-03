import { useQuery } from "react-query";
import { commentApi, MainChatProps } from "util/api/post";

const getComment = async (postId: string): Promise<MainChatProps[]> => {
  const data = await commentApi(postId);
  return data.result;
};

export const useComment = (postId: string) => {
  return useQuery(["comments", postId], () => getComment(postId), {
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
