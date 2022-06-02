import BoardForm, { BoardFormType } from "components/mocular/board/BoardForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "./hook/usePost";
import usePostUpdate from "./hook/usePostUpdate";

export default function BoardUpdate() {
  const params = useParams();
  const [nowBoard, setNowBoard] = useState<"global" | "local">("global");
  const { mutate: postMutate } = usePostUpdate();

  const { data } = usePost(params.postIdx!);

  useEffect(() => {
    if (
      data?.category === "cafe" ||
      data?.category === "buy" ||
      data?.category === "travel"
    ) {
      setNowBoard("local");
    } else {
      setNowBoard("global");
    }
  }, [data, nowBoard, setNowBoard]);

  const onSubmit = (data: BoardFormType) => {
    postMutate({ ...data, boardType: nowBoard });
  };

  return (
    <section className="w-full px-4">
      <h1 className="text-2xl mt-8 mb-5">수정하기</h1>
      <BoardForm onSubmit={onSubmit} board={data} type={nowBoard}></BoardForm>
    </section>
  );
}
