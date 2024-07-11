import setAuthHeader from './setAuthHeader';
import axios from 'axios'
import { setAuth } from '@/redux/authSlice';
const baseUrl: string = import.meta.env.VITE_BASE_URL;
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;


const loginUser = async(userData:any, dispatch:any) => {
	// const auth = useSelector((state:any) => state.auth)
  
    console.log(baseUrl); // Should log http://localhost:3001/api
    console.log(apiBaseUrl); // Should log /

    const response = await axios.post(`${apiBaseUrl}/auth/login-user`, userData)
    const accessToken = response.data.accessToken
    localStorage.setItem('accessToken', accessToken);
    setAuthHeader(accessToken)
    dispatch(setAuth({isAuth:true}))

}

export default loginUser;
