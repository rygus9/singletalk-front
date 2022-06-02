import { wrappingAxios } from "./common";
import client from "./client";

interface MatchingOwner {
  userIdx: number;
  userID: string;
  password: string;
  nickname: string;
  currentToken: string;
  region: string;
  introduce: string;
}

export interface MatchingJoin {
  userMatchingIdx: number;
  userIdx: number;
  matchingIdx: number;
}

export interface MypageType {
  title: string;
  content: string;
  user: MatchingOwner;
  link: string;
  maxPeople: number;
  Done: boolean;
  createdAt: string;
  updatedAt: string;
  matchingIdx: number;
  userIdx: number;
  userMatchings: MatchingJoin[];
  nowPeople: number;
  isOwner: boolean;
  isJoin: boolean;
}

export interface MatchingListApiOutput {
  result: MypageType[];
}

export const matchingListApi = (elem: string) =>
  wrappingAxios(client.get(`/matchings${elem}`));

export interface MatchingApiOutput {
  result: MypageType;
}

export const matchingApi = (matchIdx: string) =>
  wrappingAxios(client.get(`/matchings/${matchIdx}`));

export interface MatchingRegistApiInput {
  title: string;
  contents: string;
  link: string;
  people: number;
}

export const matchingRegistApi = ({ ...elem }: MatchingRegistApiInput) =>
  wrappingAxios(client.post("/matchings", { ...elem }));

export const matchingDeleteApi = (matchIdx: string) =>
  wrappingAxios(client.delete(`/matchings/${matchIdx}`));

export type MatchingChangeApiInput = MatchingRegistApiInput;

export const matchingChangeApi = (
  { ...elem }: MatchingChangeApiInput,
  matchIdx: string
) => wrappingAxios(client.put(`/matchings/${matchIdx}`, { ...elem }));

export const matchingJoinApi = (matchingIdx: string) =>
  wrappingAxios(client.post(`/matchings/${matchingIdx}/join`));

export type matchingRoomApiOutput = {
  userID: string;
  userNickName: string;
}[];

export const matchingRoomApi = (matchingIdx: string) =>
  wrappingAxios(client.get(`/matchings/${matchingIdx}/room`));
