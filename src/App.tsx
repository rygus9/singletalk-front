import Login from "components/page/auth/Login";
import Register from "components/page/auth/Register";
import { Route, Routes } from "react-router-dom";

function headerWrapping({ children }: { children: JSX.Element | string }) {
  return <>{children}</>;
}

function App() {
  return (
    <div className="max-w-[30rem] m-auto">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regist" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
