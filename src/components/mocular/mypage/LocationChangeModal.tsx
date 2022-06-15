import NormalButton from "components/atom/button/NormalButton";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import ModalFrame from "../common/ModalFram";
import LocationInput from "../location/LocationInput";
import useChangeLocation from "./hook/useChangeLocation";

export default function LocationChangeModal() {
  const [open, setOpen] = useRecoilState(openState);

  const onModalClose = useCallback(() => {
    setOpen({ ...open, locationChangeOpen: !open.locationChangeOpen });
  }, [open, setOpen]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<{ bigLocation: string; subLocation: string }>({
    mode: "onChange",
  });

  const { mutate } = useChangeLocation(() =>
    setOpen({ ...open, locationChangeOpen: false })
  );

  const onSubmit = (data: { bigLocation: string; subLocation: string }) => {
    const returnValue = data.subLocation
      ? data.bigLocation + " " + data.subLocation
      : data.bigLocation;
    mutate({ region: returnValue });
  };

  return (
    <ModalFrame onClose={onModalClose}>
      <div className="inner relative left-1/2 top-1/3 -translate-y-1/2 -translate-x-1/2 w-fit bg-white rounded-lg">
        <div className="flex flex-col items-center pt-10 pb-8 px-16 text-xl text-black">
          <h3>위치 변경하기</h3>
        </div>
        <div className="pb-5 flex justify-center items-center space-x-3 px-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <LocationInput
              nowLoc={watch().bigLocation}
              bigLocRegister={register("bigLocation")}
              subLocRegister={register("subLocation")}
              setValue={setValue}
            />
            <div className="flex justify-center space-x-3 pt-5">
              <NormalButton type="submit" color="normalColor">
                변경하기
              </NormalButton>
              <NormalButton onClick={onModalClose}>취소하기</NormalButton>
            </div>
          </form>
        </div>
      </div>
    </ModalFrame>
  );
}
