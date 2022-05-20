import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import useSubLocation from "./hook/useSubLocation";
import { LocInfo } from "./LocationInput";

export default function SubLoc({
  codeVal,
  register,
}: {
  codeVal: string;
  register: UseFormRegisterReturn;
}) {
  const { data: subData } = useSubLocation(codeVal.slice(0, 2));
  console.log(codeVal);
  return (
    <select
      {...register}
      className="w-[8rem] py-1 border-deepGray rounded-md focus:ring-deepGray focus:border-deepGray"
    >
      {subData &&
        subData.map((elem: LocInfo) => (
          <option value={elem.name} key={elem.name}>
            {elem.name}
          </option>
        ))}
    </select>
  );
}
