import React from 'react';
import axios from 'axios'
const baseUrl: string = import.meta.env.VITE_BASE_URL;
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;
const loginUser = async() => {
    console.log(baseUrl); // Should log http://localhost:3001/api
    console.log(apiBaseUrl); // Should log /
    const loginData:any = {
        emailAddress: "b@p.com",
        password: "123"
    }
    const response = await axios.post(`${apiBaseUrl}/auth/login-user`, loginData)
    const accessToken = response.data.accessToken
    console.log(accessToken)
    localStorage.setItem('accessToken', accessToken);
}

export default loginUser;
