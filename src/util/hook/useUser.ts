import { checkLoginApi } from "./../api/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  // 인증 로직으로 대체하기
  useEffect(() => {
    async function checkUser() {
      try {
        const result = await checkLoginApi();
        if (result.result) {
          if (path === "/") navigate("/global");
        } else {
          navigate("/login");
        }
      } catch (e) {
        navigate("/login");
      }
    }
    if (path !== "/regist") {
      checkUser();
    }
  }, [navigate, path]);
};
