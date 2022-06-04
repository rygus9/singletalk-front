import { BoardListType } from "util/api/post";
import { useQuery } from "react-query";
import { getScrapPostApi } from "util/api/mypage";

const getScrapPostList = async (elem: string): Promise<BoardListType[]> => {
  const data = await getScrapPostApi(elem);
  return data.result;
};

export const useMypageScrapList = (elem: string) => {
  return useQuery(["myPagePosts", elem], () => getScrapPostList(elem), {
    retry: 1,
  });
};
