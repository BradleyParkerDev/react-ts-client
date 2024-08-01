import axios from "axios";
import logoutUser from "../auth/logoutUser";
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;

const deleteUserData = async (dispatch:any) => {
    try {
        const response = await axios.delete(`${apiBaseUrl}/users/delete-user`);
        console.log(`User successfully deleted!`)
    } catch (error) {
        console.log(error)
    }

    logoutUser(dispatch)
}

export default deleteUserData