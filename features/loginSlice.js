import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false,
    user: {},
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    setLoggedOut: (state) => {
      state.loggedIn = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setLoggedOut } = loginSlice.actions

export default loginSlice.reducer