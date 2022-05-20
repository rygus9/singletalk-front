import axios from "axios";
import qs from "qs";

const client = axios.create();

client.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

if (process.env.NODE_ENV === "development") {
  client.defaults.baseURL = "http://localhost:3000";
} else {
  client.defaults.baseURL = "";
}

export default client;
