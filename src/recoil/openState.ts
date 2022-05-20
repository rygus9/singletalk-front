import { atom } from "recoil";

export interface OpenStateTypes {
  logoutOpen: boolean;
  postDeleteOpen: boolean;
  matchingOpen: boolean;
}

export const openDefaultValue = {
  logoutOpen: false,
  postDeleteOpen: false,
  matchingOpen: false,
};

export const openState = atom<OpenStateTypes>({
  key: "toggleState",
  default: openDefaultValue,
});
