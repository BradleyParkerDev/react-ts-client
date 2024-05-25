import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface UserState {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  avatarImage: string;
  lastUpdated: string;
}

// Define the initial state
const initialState: UserState = {
  id: '',
  firstName: '',
  lastName: '',
  emailAddress: '',
  avatarImage: '',
  lastUpdated: '',
};

// Create the slice
export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...action.payload };
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const { setUser, resetUser } = usersSlice.actions;

export default usersSlice.reducer;
