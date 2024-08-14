import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    showLoginForm: true, // Start with the login form by default
  },
  reducers: {
    toggleForm: (state, action) => {
      state.showLoginForm = action.payload.showLoginForm;
    },
  },
});

export const { toggleForm } = layoutSlice.actions;
export default layoutSlice.reducer;
