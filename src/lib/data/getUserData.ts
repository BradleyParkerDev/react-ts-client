import axios from "axios"

const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;


const getUserData = async (isAuth?:string) => {

    console.log(apiBaseUrl); // api 
    // check local storage
    try {
        const localStorageUserData = localStorage.getItem('user');

    } catch (error) {
        console.log(`error fetching user data ${error}`) 

    }
    // check server
    try {
        const response = await axios.get(`${apiBaseUrl}/users/get-user`)
        const serverUserData = response.data.user
        // console.log(userData)
        return serverUserData;        
    } catch (error) {
        console.log(`error fetching user data ${error}`) 
    }

    // compare local storage and server lastUpdated times




}

export default getUserData