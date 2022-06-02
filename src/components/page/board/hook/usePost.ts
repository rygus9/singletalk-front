import { postApi, BoardType } from "util/api/post";
import { useQuery } from "react-query";

const getPost = async (postId: string): Promise<BoardType> => {
  const data = await postApi(postId);
  return data.result;
};

export const usePost = (elem: string) => {
  return useQuery(["posts", elem], () => getPost(elem));
};
