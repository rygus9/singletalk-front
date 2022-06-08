import BoardListItem from "components/mocular/board/BoardListItem";
import BoardNav from "components/mocular/boardCategory/BoardNav";
import GlobalCategory from "components/mocular/boardCategory/GlobalCategory";
import FloatingButton from "components/mocular/common/FloatingButton";
import { useSearchParams } from "react-router-dom";
import { usePostList } from "./hook/usePostList";

export default function GlobalBoardList() {
  const [searchParams] = useSearchParams();
  if (!searchParams.get("category")) {
    searchParams.set("category", "all");
  }
  if (!searchParams.get("sort")) {
    searchParams.set("sort", "all");
  }
  searchParams.set("type", "global");

  const { data, isLoading } = usePostList("?" + searchParams.toString());
  console.log(data);

  return (
    <div>
      <aside className="fixed z-40 max-w-[30rem] w-full bg-white">
        <GlobalCategory />
        <BoardNav />
      </aside>
      <div className="flex flex-col h-[calc(100vh-2.9rem)]">
        <div className="flex-none basis-[10.8rem]"></div>
        <main className="flex-auto divide-y-2 divide-gray px-3 overflow-scroll">
          {data &&
            data.result.map((elem, index) => (
              <BoardListItem {...elem} key={index} />
            ))}
        </main>
        <div className="flex-none basis-[4.8rem]"></div>
      </div>
      <FloatingButton to={"./create"} />
    </div>
  );
}
