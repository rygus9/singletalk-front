import All from "components/atom/icon/category/All";
import Local from "components/atom/icon/category/Local";
import { cls } from "util/utils";
import useSubtype from "./hook/useSubtype";

export default function BoardTypeNav() {
  const { subtype, setSubtype } = useSubtype();

  return (
    <>
      <div className="py-5 flex justify-center items-center space-x-10">
        <div
          className={cls("cursor-pointer")}
          onClick={() => {
            setSubtype("All");
          }}
        >
          {subtype === "All" ? <All colored={true}></All> : <All></All>}
        </div>
        <div
          className={cls("cursor-pointer")}
          onClick={() => {
            setSubtype("Local");
          }}
        >
          {subtype === "Local" ? (
            <Local colored={true}></Local>
          ) : (
            <Local></Local>
          )}
        </div>
      </div>
    </>
  );
}
