import NormalButton from "components/atom/button/NormalButton";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import ModalFrame from "../common/ModalFram";
import useMatchingDelete from "./hook/useMatchingDelete";

export default function MatchingDeleteModal() {
  const [open, setOpen] = useRecoilState(openState);

  const { mutate: deleteMutate } = useMatchingDelete();

  const onModalClose = useCallback(() => {
    setOpen({ ...open, matchingDeleteOpen: !open.matchingDeleteOpen });
  }, [open, setOpen]);

  const onLogoutClick = useCallback(() => {
    deleteMutate();
    onModalClose();
  }, [deleteMutate, onModalClose]);

  return (
    <ModalFrame onClose={onModalClose}>
      <div className="inner relative left-1/2 top-1/3 -translate-y-1/2 -translate-x-1/2 w-fit bg-white rounded-lg">
        <div className="flex flex-col items-center pt-10 pb-8 px-16 text-xl text-black">
          <h3>정말로</h3>
          <h3>매칭 게시글을 삭제하겠습니까?</h3>
        </div>
        <div className="pb-5 flex justify-center items-center space-x-3">
          <NormalButton onClick={onLogoutClick} color="normalColor">
            삭제하기
          </NormalButton>
          <NormalButton onClick={onModalClose}>취소하기</NormalButton>
        </div>
      </div>
    </ModalFrame>
  );
}
