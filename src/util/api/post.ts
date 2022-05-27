import { LocalCategoryKind } from "components/mocular/boardCategory/LocalCategory";
import { GlobalCategoryKind } from "components/mocular/boardCategory/GlobalCategory";
import { wrappingAxios } from "./common";
import client from "./client";

// PostList R
export interface BoardListType {
  title: string;
  userId: string;
  postId: string;
  userNickname: string;
  content: string;
  modifiedDate: string;
  usefulCnt: number;
  joyfulCnt: number;
  commentCnt: number;
}

export type PostListApiInput = {
  category?: GlobalCategoryKind | LocalCategoryKind;
  sort?: "useful" | "joyful" | "all";
  boardType: "global" | "local";
};

export type PostListApiOutput = BoardListType[];

export const postListApi = (elem: string) =>
  wrappingAxios(client.get(`/postings/${elem}`));

// Post CUD
export interface PostRegistApiInput {
  title: string;
  content: string;
  category: GlobalCategoryKind | LocalCategoryKind;
  isAnonymous: boolean;
  boardType: "global" | "local";
}

export const PostRegistApi = ({ ...elem }: PostRegistApiInput) =>
  wrappingAxios(client.post("/postings", { ...elem }));

export const PostChangeApi = ({ ...elem }, postId: number) =>
  wrappingAxios(client.put(`/postings/${postId}`, { ...elem }));

export const PostDeleteApi = (postId: number) =>
  wrappingAxios(client.delete(`/postings/${postId}`));

// Mypage PostList R
export type MyPagePostListApiInput = {
  boardType: "global" | "local";
};

export type MypagePostListApiOutput = BoardListType[];

export const mypagePostListApi = ({ ...elem }: MyPagePostListApiInput) =>
  wrappingAxios(client.get("/postings/mypage", { params: { ...elem } }));

// Post R
export interface PostApiOutput {
  postId: string;
  title: string;
  content: string;
  userId: string;
  userNickName: string;
  isScrap: boolean;
  isJoy: boolean;
  isUseful: boolean;
  joyfulCnt: number;
  usefulCnt: number;
  commentCnt: number;
  isOwner: boolean;
}

export const postApi = (postId: number) =>
  wrappingAxios(client.get(`/postings/${postId}`));

const postActionApi = (
  type: "reply" | "comment" | "posting",
  category: "joyful" | "useful" | "scrap",
  parentIdx: number = 0
) =>
  wrappingAxios(
    client.post(
      `/postings/like/${parentIdx}`,
      {},
      { params: { type, category } }
    )
  );

export const postScrap = () => postActionApi("posting", "scrap");
export const postJoyful = () => postActionApi("posting", "joyful");
export const postUseful = () => postActionApi("posting", "useful");
export const commentJoyful = () => postActionApi("comment", "joyful");

// Comment
export interface CommentRegistApiInput {
  postingIdx: number | null; // null 이면 commentIdx는 무조건 값 있음.
  commentIdx: number | null; // null 이면 postingIdx는 무조건 값 있음.
  content: string;
  isAnonymous: boolean;
}

export const commentRegistApi = ({ ...elem }: CommentRegistApiInput) =>
  client.post("/comments", { ...elem });

export interface CommentDeleteApiInput {
  type: "comment" | "reply";
}

export const commentDeleteApi = (
  { ...elem }: CommentDeleteApiInput,
  commentId: number
) => client.delete(`/comment/${commentId}`, { params: { ...elem } });

export interface SubChatElemProps {
  postId: string;
  userId: string;
  userNickName: string;
  content: string;
  isOwner: boolean;
  isDelete: boolean;
}

export interface MainChatElemProps extends SubChatElemProps {
  joyfulCnt: number;
  commentCnt: number;
  isJoyful: boolean;
}

export interface MainChatProps extends MainChatElemProps {
  answers: SubChatElemProps[];
}

export type CommentApiResult = MainChatProps[];

export const commentApi = (postId: number) =>
  client.get(`/postings/${postId}/comment`);
