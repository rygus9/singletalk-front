import { atom } from "recoil";

export interface InputChatStateTypes {
  postingIdx: string | null;
  commentIdx: string | null;
}

export const inputChatDefaultValue: InputChatStateTypes = {
  postingIdx: null,
  commentIdx: null,
};

export const inputChatState = atom<InputChatStateTypes>({
  key: "inputChatState",
  default: inputChatDefaultValue,
});
