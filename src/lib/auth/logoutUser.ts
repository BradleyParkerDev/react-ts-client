import setAuthHeader from "./setAuthHeader";




const logoutUser = () => {
    setAuthHeader(); // Call without arguments to remove the Authorization header
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
};

export default logoutUser;
