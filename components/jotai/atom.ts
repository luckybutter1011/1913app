import { atom } from "jotai";

export const walletOpenAtoms = atom<any>(false);
export const tokenBuyAtoms = atom<any>(false);
export const visibleAtom = atom<any>(false);

walletOpenAtoms.debugLabel = "walletOpenAtoms";
tokenBuyAtoms.debugLabel = "tokenBuyAtoms";
visibleAtom.debugLabel = "visibleAtom";