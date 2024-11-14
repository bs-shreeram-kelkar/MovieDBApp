// redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  name: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    updateUserInfo: (state, action) => {
      const { username, email, name } = action.payload;
      state.username = username ?? state.username;
      state.email = email ?? state.email;
      state.name = name ?? state.name;
    }
  }
});

export const { setUsername, setEmail, setName, updateUserInfo } = userSlice.actions;
export default userSlice.reducer;
