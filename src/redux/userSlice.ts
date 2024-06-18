import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  emailAddress: '',
  userImage: '',
  lastUpdated: '',
};

// Create the slice
export const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			return { ...action.payload };
		},
		resetUser: () => {
			return initialState;
		},
	},
});

export const { setUser, resetUser } = usersSlice.actions;

export default usersSlice.reducer;