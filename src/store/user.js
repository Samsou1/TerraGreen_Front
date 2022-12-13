import { atomWithStorage } from "jotai/utils";

export const userLoggedInAtom = atomWithStorage("userLoggedIn", false);
