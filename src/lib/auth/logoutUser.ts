import setAuthHeader from "./setAuthHeader";
import { resetAuth } from "@/redux/authSlice";
import { resetUser } from "@/redux/userSlice";
const logoutUser = (dispatch:any) => {
    setAuthHeader(); // Call without arguments to remove the Authorization header
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
    dispatch(resetAuth())
    dispatch(resetUser())

};

export default logoutUser;
