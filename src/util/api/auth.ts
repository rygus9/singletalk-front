import { wrappingAxios } from "./common";
import client from "./client";

export interface LoginApiInput {
  userID: string;
  password: string;
}

export const loginApi = ({ ...elem }: LoginApiInput) =>
  wrappingAxios(client.post("/users/login", { ...elem }));

export interface RegistApiInput {
  userID: string;
  nickname: string;
  password: string;
  region: string;
}

export const registApi = ({ ...elem }: RegistApiInput) => {
  //return wrappingAxios(client.post("/users", { ...elem }));
  return wrappingAxios(
    client.post("/users", {
      userID: elem.userID,
      password: elem.password,
      nickname: elem.nickname,
      region: elem.region,
    })
  );
};

export const checkLoginApi = () =>
  wrappingAxios(client.get("/users/auth/check"));

export const logoutApi = () => wrappingAxios(client.get("/users/logout"));
