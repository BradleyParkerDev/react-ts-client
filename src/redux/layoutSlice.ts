import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
	name: 'layout',
	initialState: {
		navbarDrawerIsOpen: false,
		showLoginForm: true, // Start with the login form by default
	},
	reducers: {
		toggleNavbarDrawer: (state, action) => {
			state.navbarDrawerIsOpen = action.payload.navbarDrawerIsOpen;
		},		
		toggleForm: (state, action) => {
			state.showLoginForm = action.payload.showLoginForm;
		},
	},
});

export const { toggleNavbarDrawer,toggleForm } = layoutSlice.actions;
export default layoutSlice.reducer;
