import Chat from "components/atom/icon/bottom/Chat";
import Home from "components/atom/icon/bottom/Home";
import Match from "components/atom/icon/bottom/Match";
import MyPage from "components/atom/icon/bottom/MyPage";
import { Link, useLocation } from "react-router-dom";
import { cls } from "util/utils";

const bottomNavElem: {
  element: JSX.Element;
  coloredElement: JSX.Element;
  url: string;
}[] = [
  {
    element: <Home />,
    coloredElement: <Home colored={true} />,
    url: "/globalBoard",
  },
  {
    element: <Chat />,
    coloredElement: <Chat colored={true} />,
    url: "/localBoard",
  },
  {
    element: <Match />,
    coloredElement: <Match colored={true} />,
    url: "/matching",
  },
  {
    element: <MyPage />,
    coloredElement: <MyPage colored={true} />,
    url: "/mypage",
  },
];

export default function BottomNav() {
  const location = useLocation();
  const nowNav = location.pathname;

  return (
    <nav className="fixed bottom-0 w-screen max-w-[30rem] m-auto z-40">
      <ul className="flex">
        {bottomNavElem.map((elem, index) => (
          <li
            className={cls(
              "w-full py-3 flex items-center justify-center",
              elem.url === nowNav
                ? "border-t-4 border-deepGreen"
                : "border-gray border-t-2"
            )}
            key={index}
          >
            {elem.url === nowNav ? (
              <Link to={elem.url}>{elem.coloredElement}</Link>
            ) : (
              <Link to={elem.url}>{elem.element}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
