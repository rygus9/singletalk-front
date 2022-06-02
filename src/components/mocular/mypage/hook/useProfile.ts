import { getProfileApi, GetProfileOutput } from "util/api/mypage";
import { useQuery } from "react-query";

const getProfile = async (): Promise<GetProfileOutput> => {
  const data = await getProfileApi();
  return data.result;
};

export const useProfile = () => {
  return useQuery(["profiles"], () => getProfile());
};
