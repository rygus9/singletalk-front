import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSubtype() {
  const [searchParams, setSearchParams] = useSearchParams();
  let subtype = searchParams.get("subtype");
  if (!subtype) {
    subtype = "All";
  }

  const setSubtype = useCallback(
    (category: string) => {
      searchParams.set("subtype", category);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return { subtype, setSubtype };
}
