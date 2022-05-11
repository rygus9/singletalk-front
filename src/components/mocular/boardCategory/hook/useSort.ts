import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  let sort = searchParams.get("sort");
  if (!sort) {
    sort = "all";
  }

  const onSortSet = useCallback(
    (category: string) => {
      searchParams.set("sort", category);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return { sort, onSortSet };
}
