import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import useBigLocation from "./hook/useBigLocation";
import SubLoc from "./SubLoc";

export interface LocInfo {
  name: string;
  code: string;
}

export default function LocationInput({
  nowLoc,
  bigLocRegister,
  subLocRegister,
}: {
  nowLoc: string;
  bigLocRegister: UseFormRegisterReturn;
  subLocRegister: UseFormRegisterReturn;
}) {
  const { data: bigData } = useBigLocation();
  return (
    <div>
      <div className="text-deepBlack pb-1">거주 지역</div>
      <div className="flex items-center space-x-2">
        <select
          {...bigLocRegister}
          className="py-1 border-deepGray rounded-md focus:ring-deepGray focus:border-deepGray"
        >
          {bigData &&
            bigData.map((elem: LocInfo) => (
              <option value={elem.name} key={elem.name}>
                {elem.name}
              </option>
            ))}
        </select>
        {nowLoc &&
          bigData.filter(
            (elem: LocInfo) => elem.name === nowLoc && elem.code[0] === "4"
          ).length === 1 && (
            <SubLoc
              codeVal={
                bigData.filter((elem: LocInfo) => elem.name === nowLoc)[0].code
              }
              register={subLocRegister}
            ></SubLoc>
          )}
      </div>
    </div>
  );
}
