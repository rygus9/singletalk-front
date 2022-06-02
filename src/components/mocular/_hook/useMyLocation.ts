import { getLocationApi } from "../../../util/api/mypage";
import { useQuery } from "react-query";

const getLocation = async (): Promise<{ region: string }> => {
  const data = await getLocationApi();
  return data.result;
};

export const useMyLocation = () => {
  return useQuery(["userLoc"], () => getLocation());
};
