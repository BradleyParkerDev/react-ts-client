import axios from "axios";

const setAuthHeader = (accessToken?: string) => {
    if (accessToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log('Authorization headers set!');
    } else {
        delete axios.defaults.headers.common['Authorization'];
        console.log('Authorization headers removed!');
    }
};

export default setAuthHeader;
