import { atom } from "recoil";

const userloggedinState = atom({
    key: 'userloggedinState',
    default: false,
});

export const userState = atom({
    key: 'userState',
    default: '',
});

export const adminloggedinState = atom({
    key: 'adminloggedinState',
    default: false,
});

export const adminState = atom({
    key: 'adminState',
    default: '',
});


export default userloggedinState
