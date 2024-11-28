import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark', // Default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
        // console.log("here")
        // console.log(state.theme)
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;