import { getSubLocation } from "util/api/location";
import { useQuery } from "react-query";
export default function useSubLocation(subString: string) {
  return useQuery(["subLocation", subString], () => getSubLocation(subString));
}
