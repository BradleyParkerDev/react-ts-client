import { jwtVerify } from 'jose';
import logoutUser from './logoutUser';
import setAuthHeader from './setAuthHeader';

const authCheck = async (dispatch:any) => {
    
    const accessToken: string | null = localStorage.getItem('accessToken');
    if (!accessToken) {
        console.error('Access token not found in localStorage');
        logoutUser(dispatch);
        return;
    }

    try {
        const encodedKey = new TextEncoder().encode(import.meta.env.VITE_ACCESS_TOKEN_SECRET_KEY);
        const decodedAccessToken = await jwtVerify(accessToken, encodedKey);

        console.log(decodedAccessToken);

        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedAccessToken.payload.exp && currentTime >= decodedAccessToken.payload.exp) {
            console.error('Access token has expired');
            logoutUser(dispatch);
            return false;

        } else {
            console.log('Access token is valid', decodedAccessToken.payload);
            setAuthHeader(accessToken)
            return true;

        }

    } catch (error) {
        console.error('Error verifying JWT:', error);
        logoutUser(dispatch);

    }
};

export default authCheck;
