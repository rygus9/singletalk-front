export default function Profile({
  imageSrc,
  nickname,
}: {
  imageSrc?: string | null;
  nickname: string;
}) {
  return (
    <div className="flex items-center py-1 space-x-2">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        ></img>
      ) : (
        <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center text-black">
          익
        </div>
      )}
      <div className="text-lightBlack">{nickname}</div>
    </div>
  );
}
