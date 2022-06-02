export default function Profile({
  nickname,
  isAnonymous = false,
}: {
  nickname: string;
  isAnonymous?: boolean;
}) {
  return (
    <div className="flex items-center py-1 space-x-2">
      <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center text-black">
        익
      </div>
      <div className="text-lightBlack">{isAnonymous ? "익명" : nickname}</div>
    </div>
  );
}
