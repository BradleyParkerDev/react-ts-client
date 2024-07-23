import axios from "axios";
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;

const registerUser = async (formData:any) => {
    console.log('register user');
    try {
        const response = await axios.post(`${apiBaseUrl}/users/register-user`, formData);
        console.log('User registered:', response.data);

    } catch (error) {
        console.error('Error registering user:', error);
    }
}

export default registerUser