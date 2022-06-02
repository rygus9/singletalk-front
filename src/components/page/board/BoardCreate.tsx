import BoardForm, { BoardFormType } from "components/mocular/board/BoardForm";
import LocationUI from "components/mocular/boardCategory/LocationUI";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import usePostRegist from "./hook/usePostRegist";

export default function BoardCreate() {
  const location = useLocation();
  const [nowBoard, setNowBoard] = useState<"global" | "local">("global");
  const { mutate: postMutate } = usePostRegist();

  useEffect(() => {
    const path = location.pathname;
    setNowBoard(path.split("/")[1] as "global" | "local");
  }, [location, setNowBoard]);

  const onSubmit = (data: BoardFormType) => {
    postMutate({ ...data, boardType: nowBoard });
  };

  return (
    <section className="w-full px-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl py-4 text-deepBlack">
          {nowBoard === "global" ? "전체 게시글" : "지역 게시글"}
        </h1>
        <Link
          to={nowBoard === "global" ? "/local/create" : "/global/create"}
          className="flex items-center text-lightBlack"
        >
          {nowBoard === "global" ? "지역 게시글" : "전체 게시글"} 쓰기 &nbsp;
          &gt;
        </Link>
      </header>
      {nowBoard === "global" ? <></> : <LocationUI />}
      <BoardForm onSubmit={onSubmit} type={nowBoard}></BoardForm>
    </section>
  );
}
