import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useCategory() {
  const [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");
  if (!category) {
    category = "all";
  }

  const onCategorySet = useCallback(
    (category: string) => {
      searchParams.set("category", category);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return { category, onCategorySet };
}
