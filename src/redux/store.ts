import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import userReducer from "./userSlice";
import layoutReducer from "./layoutSlice";


export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        layout: layoutReducer
    }
})