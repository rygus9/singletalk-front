import { atom } from "recoil";

export interface OpenStateTypes {
  logoutOpen: boolean;
  postDeleteOpen: boolean;
  matchingOpen: boolean;
  locationChangeOpen: boolean;
}

export const openDefaultValue = {
  logoutOpen: false,
  postDeleteOpen: false,
  matchingOpen: false,
  locationChangeOpen: false,
};

export const openState = atom<OpenStateTypes>({
  key: "toggleState",
  default: openDefaultValue,
});
