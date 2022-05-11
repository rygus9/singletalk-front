import { GlobalCategoryKind } from "components/mocular/boardCategory/GlobalCategory";
import { LocalCategoryKind } from "components/mocular/boardCategory/LocalCategory";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

export interface BoardForm {
  title: string;
  content: string;
  category: LocalCategoryKind | GlobalCategoryKind;
  isAnonymous: boolean;
}

export default function BoardCreate() {
  const location = useLocation();
  const [nowBoard, setNowBoard] = useState("");

  useEffect(() => {
    const path = location.pathname;
    setNowBoard(path.split("/")[1]);
  }, [location, setNowBoard]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BoardForm>();

  const onSubmit = (data: BoardForm) => {
    console.log(data);
  };
  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <section className="w-full px-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl py-4 text-deepBlack">
          {nowBoard === "globalBoard" ? "전체 게시글" : "지역 게시글"}
        </h1>
        <Link
          to={
            nowBoard === "globalBoard"
              ? "/localBoard/create"
              : "/globalBoard/create"
          }
          className="flex items-center text-lightBlack"
        >
          {nowBoard === "globalBoard" ? "지역 게시글" : "전체 게시글"} 쓰기
          &nbsp; &gt;
        </Link>
      </header>
      <form onSubmit={handleSubmit(onSubmit, onError)}></form>
    </section>
  );
}
