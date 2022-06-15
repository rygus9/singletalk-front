import { useEffect } from "react";
import {
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";
import useSubLocation from "./hook/useSubLocation";
import { LocInfo } from "./LocationInput";

export default function SubLoc({
  codeVal,
  register,
  setValue = null,
}: {
  codeVal: string;
  register: UseFormRegisterReturn;
  setValue: null | UseFormSetValue<{
    bigLocation: string;
    subLocation: string;
  }>;
}) {
  const { data: subData } = useSubLocation(codeVal.slice(0, 2));

  useEffect(() => {
    if (setValue && subData) {
      setValue("subLocation", subData[0].name);
    }
    return () => {
      if (setValue) {
        setValue("subLocation", "");
      }
    };
  }, [setValue, subData]);
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
