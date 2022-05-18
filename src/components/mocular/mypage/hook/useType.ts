import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useType() {
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");
  if (!type) {
    type = "board";
  }

  const onTypeSet = useCallback(
    (category: string) => {
      searchParams.set("type", category);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return { type, onTypeSet };
}
