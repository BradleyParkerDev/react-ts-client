import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  userName: '',
  userImage: '',
  lastUpdated: '',
};

// Create the slice
export const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			console.log(action.payload.userData)
			const { firstName, lastName, emailAddress, userName, userImage, lastUpdated } = action.payload.userData;
			state.firstName = firstName;
			state.lastName = lastName;
			state.emailAddress = emailAddress;
			state.userName = userName;
			state.userImage = userImage;
			state.lastUpdated = lastUpdated;
			return state;
		},
		resetUser: () => {
			return initialState;
		}
	}
});

export const { setUser, resetUser } = usersSlice.actions;

export default usersSlice.reducer;