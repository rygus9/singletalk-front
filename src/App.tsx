import BottomNav from "components/mocular/common/BottomNav";
import Header from "components/mocular/common/Header";
import Login from "components/page/auth/Login";
import Register from "components/page/auth/Register";
import Board from "components/page/board/Board";
import BoardCreate from "components/page/board/BoardCreate";
import GlobalBoardList from "components/page/board/GlobalBoardList";
import LocalBoardList from "components/page/board/LocalBoardList";
import MatchList from "components/page/matching/MatchList";
import MyPage from "components/page/mypage/MyPage";
import { Route, Routes } from "react-router-dom";

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
  return (
    <div className="max-w-[30rem] m-auto">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regist" element={<Register />}></Route>
        <Route
          path="/globalBoard"
          element={headerWrapping(
            bottomNavWrapping(<GlobalBoardList />),
            "(All)"
          )}
        ></Route>
        <Route
          path="/localBoard"
          element={headerWrapping(
            bottomNavWrapping(<LocalBoardList />),
            "(Local)"
          )}
        ></Route>
        <Route
          path="/globalBoard/create"
          element={headerWrapping(<BoardCreate />, "(write)")}
        ></Route>
        <Route
          path="/localBoard/create"
          element={headerWrapping(<BoardCreate />, "(write)")}
        ></Route>
        <Route
          path="/globalBoard/:postId"
          element={headerWrapping(<Board />, "")}
        ></Route>
        <Route
          path="/localBoard/:postId"
          element={headerWrapping(<Board />, "")}
        ></Route>
        <Route
          path="/matching"
          element={headerWrapping(bottomNavWrapping(<MatchList />), "(Match)")}
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
