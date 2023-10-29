import { atom } from "recoil"

export const randomIdState = atom({
    key: "randomId",
    default: 0,
})