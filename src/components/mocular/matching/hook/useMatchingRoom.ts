import { useQuery } from "react-query";
import { matchingRoomApi, matchingRoomApiOutput } from "util/api/matching";

const getMatchingRoom = async (
  matchingIdx: string
): Promise<matchingRoomApiOutput> => {
  const data = await matchingRoomApi(matchingIdx);
  return data.result;
};

export const useMatchingRooom = (matchingIdx: string) => {
  return useQuery(
    ["matchingRoom", matchingIdx],
    () => getMatchingRoom(matchingIdx),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );
};
