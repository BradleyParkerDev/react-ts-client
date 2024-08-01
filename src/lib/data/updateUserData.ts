import axios from "axios";
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;
const updateUserData = async (userData:any) => {
    if (userData) {
        try {
            console.log('Updating user data on the server....');
            const response = await axios.put(`${apiBaseUrl}/users/update-user`, userData);
            console.log(response);
        } catch (error) {
            console.log(`Error server failed to update: ${error}`);
            return error;
        }

        // try {
        //     // After successful update, fetch the updated data from the server
        //     console.log('Fetching updated user data from the server...');
        //     const updatedResponse = await axios.get(`${urlEndPoint}/users/get-user`);
        //     const updatedUserData = updatedResponse.data.userData;

        //     console.log('Updating user data in local storage...');
        //     setDataInLocalStorage('user', updatedUserData);
        // } catch (fetchError) {
        //     console.log(`Error fetching updated user data: ${fetchError}`);
        // }        
    } else {
        console.log('No non-empty values to update.');
    }
}

export default updateUserData