import { MatchingType, mypageMatchingListApi } from "util/api/matching";
import { useQuery } from "react-query";

const getMyPageMatchingList = async (): Promise<MatchingType[]> => {
  const data = await mypageMatchingListApi();
  console.log(data);
  return data.result;
};

export const useMypageMatchingList = () => {
  return useQuery(["myPageBuys"], () => getMyPageMatchingList(), {
    retry: 1,
  });
};
