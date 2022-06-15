import BoardListItem from "components/mocular/board/BoardListItem";
import BoardNav from "components/mocular/boardCategory/BoardNav";
import LocalCategory from "components/mocular/boardCategory/LocalCategory";
import LocationUI from "components/mocular/boardCategory/LocationUI";
import FloatingButton from "components/mocular/common/FloatingButton";
import { useSearchParams } from "react-router-dom";
import { usePostList } from "./hook/usePostList";

export default function LocalBoardList() {
  const [searchParams] = useSearchParams();
  if (!searchParams.get("category")) {
    searchParams.set("category", "all");
  }
  if (!searchParams.get("sort")) {
    searchParams.set("sort", "all");
  }
  searchParams.set("type", "local");

  const { data } = usePostList("?" + searchParams.toString());

  return (
    <div>
      <aside className="fixed z-40 max-w-[30rem] w-full bg-white">
        <div className="pl-3 pt-2">
          <LocationUI />
        </div>
        <LocalCategory />
        <BoardNav />
      </aside>
      <div className="flex flex-col h-[calc(100vh-2.9rem)]">
        <div className="flex-none basis-[13.5rem]"></div>
        <main className="flex-auto divide-y divide-gray px-3 overflow-y-scroll overflow-x-hidden">
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
