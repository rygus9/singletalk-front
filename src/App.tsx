import Header from "components/mocular/common/Header";
import Login from "components/page/auth/Login";
import Register from "components/page/auth/Register";
import GlobalBoardList from "components/page/board/GlobalBoardList";
import LocalBoardList from "components/page/board/LocalBoardList";
import { Route, Routes } from "react-router-dom";

function headerWrapping(children: JSX.Element | string, subtitle?: string) {
  return (
    <div>
      <Header subtitle={subtitle} />
      <div className="pt-11">{children}</div>
    </div>
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
          element={headerWrapping(<GlobalBoardList />, "(All)")}
        ></Route>
        <Route
          path="/localBoard"
          element={headerWrapping(<LocalBoardList />, "(Local)")}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
