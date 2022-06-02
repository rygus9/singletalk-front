import { PostListApiOutput } from "util/api/post";
import { useQuery } from "react-query";
import { postListApi } from "util/api/post";

const getPostList = async (elem: string): Promise<PostListApiOutput> => {
  const data = await postListApi(elem);
  return data;
};

export const usePostList = (elem: string) => {
  return useQuery(["posts", elem], () => getPostList(elem), {
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
