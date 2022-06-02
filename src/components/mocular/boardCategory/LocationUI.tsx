import { useMyLocation } from "../_hook/useMyLocation";

export default function LocationUI() {
  const { data, isLoading } = useMyLocation();

  return (
    <h3 className="text-xl flex items-center">
      <span className="text-deepGray">현재 지역</span>
      <span className="text-deepBlack">&nbsp;&gt;&nbsp;</span>
      <span className="text-base text-deepBlack">
        {data && <span>{data.region}</span>}
      </span>
    </h3>
  );
}
