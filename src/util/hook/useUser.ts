import { useNavigate } from "react-router-dom";

export const useUser = async () => {
  const navigate = useNavigate();
  // 인증 로직으로 대체하기
  const userId = localStorage.getItem("userId");
  if (userId) {
    return userId;
  }
  navigate("/login");
};
