import { wrappingAxios } from "./common";
import client from "./client";

export const getLocationApi = () =>
  wrappingAxios(client.get("/users/my-page/region"));

export interface ChangeLocationInput {
  region: string;
}

export const changeLocationApi = (data: ChangeLocationInput) =>
  wrappingAxios(client.put("/users/my-page/region", data));

export interface GetProfileOutput {
  userNickname: string;
  introduce: string;
}

export const getProfileApi = () => wrappingAxios(client.get("users/my-page"));

export interface EditProfileInput {
  userNickname: string;
  introduce: string;
}

export const editProfileApi = (data: EditProfileInput) =>
  wrappingAxios(client.put("users/my-page", data));
