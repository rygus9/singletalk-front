import { getBigLocation } from "util/api/location";
import { useQuery } from "react-query";
export default function useBigLocation() {
  return useQuery("bigLocation", () => getBigLocation());
}
