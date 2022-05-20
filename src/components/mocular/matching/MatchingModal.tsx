import NormalButton from "components/atom/button/NormalButton";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import ModalFrame from "../common/ModalFram";
import Profile from "../common/Profile";

export interface MatchPersonType {
  userId: string;
  userNickName: string;
}

const data: MatchPersonType[] = [
  { userId: "멤버1", userNickName: "Cuzz" },
  { userId: "멤버1", userNickName: "Cuzz" },
  { userId: "멤버1", userNickName: "Cuzz" },
];

export default function MatchingModal() {
  const [open, setOpen] = useRecoilState(openState);

  const onModalClose = useCallback(() => {
    setOpen({ ...open, matchingOpen: !open.matchingOpen });
  }, [open, setOpen]);

  return (
    <ModalFrame onClose={onModalClose}>
      <div className="inner relative left-1/2 top-1/3 -translate-y-1/2 -translate-x-1/2 w-fit bg-white rounded-lg">
        <div className="pt-8 pb-3 px-4 text-xl text-black w-80">
          <h2 className="text-2xl">매칭 현황</h2>
        </div>
        <section className="space-y-2">
          {data.map((elem) => (
            <div className="flex items-center justify-between px-4">
              <div>
                <Profile nickname={elem.userNickName} />
              </div>
              <NormalButton type="button" size="sm">
                삭제하기
              </NormalButton>
            </div>
          ))}
        </section>
        <div className="w-full py-6 flex justify-center items-center space-x-4">
          <NormalButton color="normalColor" size="sm">
            확정하기
          </NormalButton>
          <NormalButton size="sm" onClick={onModalClose}>
            닫기
          </NormalButton>
        </div>
      </div>
    </ModalFrame>
  );
}
