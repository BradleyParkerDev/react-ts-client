import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    accessToken: '',
    authLoading: true,

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuth = action.payload.isAuth;
            state.authLoading = false;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
        },

    
    },
});



export const { setAuthenticated, setAccessToken } = authSlice.actions;

export default authSlice.reducer;