import { MypageType } from "util/api/matching";
import { useQuery } from "react-query";
import { matchingApi } from "util/api/matching";

const getMatching = async (matchId: string): Promise<MypageType> => {
  const data = await matchingApi(matchId);
  return data.result;
};

export const useMatching = (elem: string) => {
  return useQuery(["matchings", elem], () => getMatching(elem));
};
