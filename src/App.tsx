import BottomNav from "components/mocular/common/BottomNav";
import Header from "components/mocular/common/Header";
import Login from "components/page/auth/Login";
import Register from "components/page/auth/Register";
import Board from "components/page/board/BoardPage";
import BoardCreate from "components/page/board/BoardCreate";
import GlobalBoardList from "components/page/board/GlobalBoardList";
import LocalBoardList from "components/page/board/LocalBoardList";
import MatchCreate from "components/page/matching/MatchCreate";
import MatchList from "components/page/matching/MatchList";
import MyPage from "components/page/mypage/MyPage";
import { Route, Routes } from "react-router-dom";
import MatchPage from "components/page/matching/MatchPage";
import { cls } from "util/utils";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import { useUser } from "util/hook/useUser";

function headerWrapping(children: JSX.Element | string, subtitle?: string) {
  return (
    <div className="w-full">
      <Header subtitle={subtitle} />
      <div className="pt-11">{children}</div>
    </div>
  );
}

function bottomNavWrapping(children: JSX.Element) {
  return (
    <>
      {children} <BottomNav />
    </>
  );
}

function App() {
  const open = useRecoilValue(openState);
  useUser();

  return (
    <div
      className={cls(
        "max-w-[30rem] m-auto",
        open.logoutOpen || open.matchingOpen || open.postDeleteOpen
          ? "h-screen overflow-hidden"
          : ""
      )}
    >
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regist" element={<Register />}></Route>
        <Route
          path="/global"
          element={headerWrapping(
            bottomNavWrapping(<GlobalBoardList />),
            "(All)"
          )}
        ></Route>
        <Route
          path="/local"
          element={headerWrapping(
            bottomNavWrapping(<LocalBoardList />),
            "(Local)"
          )}
        ></Route>
        <Route
          path="/global/create"
          element={headerWrapping(<BoardCreate />, "(write)")}
        ></Route>
        <Route
          path="/local/create"
          element={headerWrapping(<BoardCreate />, "(write)")}
        ></Route>
        <Route
          path="/board/:postId"
          element={headerWrapping(<Board />, "")}
        ></Route>
        <Route
          path="/matching"
          element={headerWrapping(bottomNavWrapping(<MatchList />), "(Match)")}
        ></Route>
        <Route
          path="/matching/create"
          element={headerWrapping(<MatchCreate />, "(write)")}
        ></Route>
        <Route
          path="/matching/:matchId"
          element={headerWrapping(<MatchPage />)}
        ></Route>
        <Route
          path="/mypage"
          element={headerWrapping(bottomNavWrapping(<MyPage />), "(MyPage)")}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
