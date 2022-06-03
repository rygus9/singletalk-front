import { BoardListType, mypagePostListApi } from "util/api/post";
import { useQuery } from "react-query";

const getMyPagePostList = async (elem: string): Promise<BoardListType[]> => {
  const data = await mypagePostListApi(elem);
  console.log(data);
  return data.result;
};

export const useMypagePostList = (elem: string) => {
  return useQuery(["myPagePosts", elem], () => getMyPagePostList(elem), {
    retry: 1,
  });
};
