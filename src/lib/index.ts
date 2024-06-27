// authClientUtil imports
import authCheck from "./auth/authCheck";
import loginUser from "./auth/loginUser";
import logoutUser from "./auth/logoutUser";
import setAuthHeader from "./auth/setAuthHeader";

// dataClientUtil imports
import deleteUserData from "./data/deleteUserData";
import getUserData from "./data/getUserData";
import registerUser from "./data/registerUser";
import updateUserData from "./data/updateUserData";


export const authClientUtil = {
    authCheck,
    loginUser,
    logoutUser,
    setAuthHeader
}

export const dataClientUtil = {
    deleteUserData,
    getUserData,
    registerUser,
    updateUserData
}

