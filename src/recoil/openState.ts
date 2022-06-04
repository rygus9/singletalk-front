import { atom } from "recoil";

export interface OpenStateTypes {
  logoutOpen: boolean;
  postDeleteOpen: boolean;
  matchingDeleteOpen: boolean;
  matchingOpen: boolean;
  locationChangeOpen: boolean;
}

export const openDefaultValue = {
  logoutOpen: false,
  postDeleteOpen: false,
  matchingDeleteOpen: false,
  matchingOpen: false,
  locationChangeOpen: false,
};

export const openState = atom<OpenStateTypes>({
  key: "toggleState",
  default: openDefaultValue,
});
