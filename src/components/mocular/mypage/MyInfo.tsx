import Button from "components/atom/button";
import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import TextArea from "components/atom/textArea";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { EditProfileInput } from "util/api/mypage";
import { useMyLocation } from "../_hook/useMyLocation";
import useChangeProfile from "./hook/useChangeProfile";
import { useProfile } from "./hook/useProfile";
import LocationChangeModal from "./LocationChangeModal";
import LogoutModal from "./LogoutModal";

export interface MyPageInfo {
  nickname: string;
  introduce: string;
  location: string;
}

export default function MyInfo() {
  const [open, setOpen] = useRecoilState(openState);
  const [edit, setEdit] = useState(false);

  const onLogoutClick = useCallback(() => {
    setOpen({ ...open, logoutOpen: !open.logoutOpen });
  }, [setOpen, open]);

  const onLocationClick = useCallback(() => {
    setOpen({ ...open, locationChangeOpen: !open.locationChangeOpen });
  }, [setOpen, open]);

  const onEditClick = useCallback(() => {
    setEdit((elem) => !elem);
  }, [setEdit]);

  const { data: myLocation } = useMyLocation();
  const { data: myProfile } = useProfile();
  const { mutate } = useChangeProfile(() => setEdit(false));

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditProfileInput>({ mode: "onChange" });

  const onSubmit = (data: EditProfileInput) => {
    mutate(data);
  };

  return (
    <header className="flex items-center pr-3">
      <div className="px-6">
        <div className="w-16 h-16 rounded-full border border-black flex justify-center items-center text-black">
          익
        </div>
      </div>
      <div className="py-4">
        {edit ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center mb-1">
              <Input
                placeholder="닉네임"
                inputSize="sm"
                register={register("userNickname", { required: true })}
              ></Input>
              <span
                className="underline ml-10 text-deepBlack cursor-pointer min-w-[5rem]"
                onClick={onEditClick}
              >
                수정 취소
              </span>
            </div>
            <TextArea
              textAreaHeight="sm"
              register={register("introduce")}
            ></TextArea>
            {errors.userNickname && (
              <span className="text-sm text-red-500">
                닉네임을 모두 입력해야 합니다.
              </span>
            )}
            <div className="mb-1 flex justify-end">
              <Button type="submit" size="sm">
                제출
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex items-center">
              <h3 className="text-2xl mr-3 text-deepBlack">
                {myProfile?.userNickname}
              </h3>
              <span
                className="underline text-deepBlack cursor-pointer mr-5"
                onClick={onEditClick}
              >
                수정하기
              </span>
              <NormalButton type="button" size="sm" onClick={onLogoutClick}>
                로그아웃
              </NormalButton>
            </div>
            <p className="py-3 text-lightBlack min-h-[5rem]">
              {myProfile && myProfile.introduce
                ? myProfile.introduce
                : "소개글이 없어요"}
            </p>
          </>
        )}
        <div className="flex items-center">
          <h5 className="text-lg mr-6 text-deepBlack">{myLocation?.region}</h5>
          <NormalButton type="button" size="sm" onClick={onLocationClick}>
            위치변경
          </NormalButton>
        </div>
      </div>
      {open.logoutOpen && <LogoutModal />}
      {open.locationChangeOpen && <LocationChangeModal />}
    </header>
  );
}
