import { LocalCategoryKind } from "components/mocular/boardCategory/LocalCategory";
import { GlobalCategoryKind } from "components/mocular/boardCategory/GlobalCategory";
import { wrappingAxios } from "./common";
import client from "./client";

// PostList R
export interface BoardListType {
  title: string;
  userID: string;
  userIdx: number;
  postingIdx: number;
  userNickname: string;
  content: string;
  updatedAt: string;
  createdAt: string;
  usefulCnt: number;
  joyfulCnt: number;
  scrapCnt: number;
  commentCnt: number;
  isUseful: boolean;
  isJoyful: boolean;
  isScrap: boolean;
}

export type PostListApiInput = {
  category: GlobalCategoryKind | LocalCategoryKind;
  sort: "useful" | "joyful" | "all";
  type: "global" | "local";
};

export interface PostListApiOutput {
  result: BoardListType[];
}

export const postListApi = (elem: string) =>
  wrappingAxios(client.get(`/postings${elem}`));

// Post CUD
export interface PostRegistApiInput {
  title: string;
  content: string;
  category: GlobalCategoryKind | LocalCategoryKind;
  isAnonymous: boolean;
  boardType: "global" | "local";
}

export const postRegistApi = ({ ...elem }: PostRegistApiInput) => {
  return wrappingAxios(client.post("/postings", { ...elem }));
};

export const postChangeApi = (
  { ...elem }: PostRegistApiInput,
  postId: string
) => wrappingAxios(client.put(`/postings/${postId}`, { ...elem }));

export const postDeleteApi = (postId: string) =>
  wrappingAxios(client.delete(`/postings/${postId}`));

// Mypage PostList R
export type MyPagePostListApiInput = {
  boardType: "global" | "local";
};

export interface MypagePostListApiOutput {
  result: BoardListType[];
}

export const mypagePostListApi = ({ ...elem }: MyPagePostListApiInput) =>
  wrappingAxios(client.get("/postings/mypage", { params: { ...elem } }));

// Post R
export interface BoardType {
  postingIdx: number;
  title: string;
  userID: string;
  userIdx: number;
  userNickname: string;
  content: string;
  updatedAt: string;
  createdAt: string;
  usefulCnt: number;
  joyfulCnt: number;
  scrapCnt: number;
  commentCnt: number;
  isUseful: boolean;
  isJoyful: boolean;
  isScrap: boolean;
  isAnonymous: boolean;
  category: string;
  isOwner: boolean;
}

export interface PostApiOutput {
  result: BoardType;
}

export const postApi = (postId: string) =>
  wrappingAxios(client.get(`/postings/${postId}`));

const postActionApi = (
  type: "reply" | "comment" | "posting",
  category: "joyful" | "useful" | "scrap",
  parentIdx: string
) =>
  wrappingAxios(
    client.post(
      `/postings/like/${parentIdx}`,
      {},
      { params: { type, category } }
    )
  );

export const postScrapApi = (postId: string) =>
  postActionApi("posting", "scrap", postId);
export const postJoyfulApi = (postId: string) =>
  postActionApi("posting", "joyful", postId);
export const postUsefulApi = (postId: string) =>
  postActionApi("posting", "useful", postId);
export const commentJoyfulApi = (commentId: string) =>
  postActionApi("comment", "joyful", commentId);

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
