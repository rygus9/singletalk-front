import axios from "axios";
import qs from "qs";

// parameter path 는 직접,
// query와 body는 객체로 전달
const client = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8000", // 서버 domain
  },
  withCredentials: true,
});

client.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

if (process.env.NODE_ENV === "development") {
  client.defaults.baseURL = "http://localhost:8000";
} else {
  client.defaults.baseURL = "";
}

export default client;
