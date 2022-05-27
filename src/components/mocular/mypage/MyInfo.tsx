import Button from "components/atom/button";
import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import TextArea from "components/atom/textArea";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
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

  const myInfo: MyPageInfo = {
    nickname: "Cuzz",
    introduce: "안녕하세요.",
    location: "수원시",
  };
  return (
    <header className="flex items-center">
      <div className="px-6">
        <div className="w-16 h-16 rounded-full border border-black flex justify-center items-center text-black">
          익
        </div>
      </div>
      <div className="py-4">
        {edit ? (
          <>
            <div className="flex items-center mb-1">
              <Input placeholder="닉네임" inputSize="sm"></Input>
              <span
                className="underline ml-10 text-deepBlack cursor-pointer min-w-[5rem]"
                onClick={onEditClick}
              >
                수정 취소
              </span>
            </div>
            <TextArea textAreaHeight="sm"></TextArea>
            <div className="mb-1 flex justify-end">
              <Button type="submit" size="sm">
                제출
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <h3 className="text-2xl mr-3 text-deepBlack">
                {myInfo.nickname}
              </h3>
              <span
                className="underline mr-10 text-deepBlack cursor-pointer"
                onClick={onEditClick}
              >
                수정하기
              </span>
              <NormalButton type="button" size="sm" onClick={onLogoutClick}>
                로그아웃
              </NormalButton>
            </div>
            <p className="py-3 text-lightBlack">{myInfo.introduce}</p>
          </>
        )}
        <div className="flex items-center">
          <h5 className="text-lg mr-6 text-deepBlack">{myInfo.location}</h5>
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
