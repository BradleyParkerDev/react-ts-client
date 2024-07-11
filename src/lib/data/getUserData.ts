import axios from "axios"

const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;


const getUserData = async () => {

    console.log(apiBaseUrl); // api 
    // check local storage

    // check server
    try {
        const response = await axios.get(`${apiBaseUrl}/users/get-user`)
        const userData = response.data.user
        // console.log(userData)
        return userData;        
    } catch (error) {
        console.log(`error fetching user data ${error}`) 
    }

    // compare local storage and server lastUpdated times




}

export default getUserData