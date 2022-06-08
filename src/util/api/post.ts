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
  isAnonymous: boolean;
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

// Mypage PostList
export interface MypagePostListApiOutput {
  result: BoardListType[];
}

export const mypagePostListApi = (elem: string) =>
  wrappingAxios(client.get(`/postings/mypage${elem}`));

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
  postingIdx: string | null; // null 이면 commentIdx는 무조건 값 있음.
  commentIdx: string | null; // null 이면 postingIdx는 무조건 값 있음.
  content: string;
  isAnonymous: boolean;
}

export const commentRegistApi = ({ ...elem }: CommentRegistApiInput) => {
  return wrappingAxios(client.post("/comments", { ...elem }));
};

export interface CommentDeleteApiInput {
  type: "comment" | "reply";
  commentId: string;
}

export const commentDeleteApi = ({ ...elem }: CommentDeleteApiInput) =>
  wrappingAxios(
    client.delete(`/comments/${elem.commentId}`, {
      params: { type: elem.type },
    })
  );

export interface SubChatElemProps {
  replyIdx: number;
  commentIdx: number;
  userIdx: number;
  userNickname: string;
  content: string;
  isDeleted: boolean;
  isAnonymous: boolean;
  isOwner: boolean;
}

export interface MainChatElemProps {
  commentIdx: number;
  postingIdx: number;
  userIdx: number;
  userNickname: string;
  content: string;
  isAnonymous: boolean;
  joyfulCnt: number;
  replyCnt: number;
  isJoyful: boolean;
  isOwner: boolean;
  isDelete: boolean;
}

export interface MainChatProps extends MainChatElemProps {
  answers: SubChatElemProps[];
}

export interface CommentApiResult {
  result: MainChatProps[];
}

export const commentApi = (postId: string): Promise<CommentApiResult> =>
  wrappingAxios(client.get(`/comments/${postId}`));
