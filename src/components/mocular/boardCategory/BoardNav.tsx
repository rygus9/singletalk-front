export default function BoardNav({
  selected = "유용해요",
}: {
  selected?: string;
}) {
  const navElem = ["유용해요", "재밌어요", "모두보기"];

  return (
    <nav className="py-2">
      <ul className="list-none flex items-center text-center">
        {navElem.map((elem: string) =>
          selected === elem ? (
            <li
              key={elem}
              className="w-full pb-2 text-deepGreen border-b border-deepGreen"
            >
              {elem}
            </li>
          ) : (
            <li key={elem} className="w-full pb-2">
              {elem}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
