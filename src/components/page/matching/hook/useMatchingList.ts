import { MatchingListApiOutput } from "util/api/matching";
import { useQuery } from "react-query";
import { matchingListApi } from "util/api/matching";

const getMatchingList = async (
  elem: string
): Promise<MatchingListApiOutput> => {
  const data = await matchingListApi(elem);
  return data;
};

export const useMatchingList = (elem: string) => {
  return useQuery(["matchings", elem], () => getMatchingList(elem), {
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
