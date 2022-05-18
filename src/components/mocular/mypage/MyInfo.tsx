import NormalButton from "components/atom/button/NormalButton";

export interface MyPageInfo {
  nickname: string;
  introduce: string;
  location: string;
  imageSrc: string | null;
}

export default function MyInfo() {
  const myInfo: MyPageInfo = {
    nickname: "Cuzz",
    introduce: "안녕하세요.",
    location: "수원시",
    imageSrc: null,
  };
  return (
    <header className="flex items-center">
      <div className="px-6">
        {myInfo.imageSrc ? (
          <img
            src={myInfo.imageSrc}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          ></img>
        ) : (
          <div className="w-16 h-16 rounded-full border border-black flex justify-center items-center text-black">
            익
          </div>
        )}
      </div>
      <div className="py-4">
        <div className="flex items-center">
          <h3 className="text-2xl mr-3 text-deepBlack">{myInfo.nickname}</h3>
          <span className="underline mr-10 text-deepBlack">수정하기</span>
          <NormalButton type="button" size="sm">
            로그아웃
          </NormalButton>
        </div>
        <p className="py-3 text-lightBlack">{myInfo.introduce}</p>
        <div className="flex items-center">
          <h5 className="text-lg mr-6 text-deepBlack">{myInfo.location}</h5>
          <NormalButton type="button" size="sm">
            위치변경
          </NormalButton>
        </div>
      </div>
    </header>
  );
}
