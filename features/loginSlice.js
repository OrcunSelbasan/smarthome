import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false,
    loadingMessage: "Trying to login...",
    user: {},
    rooms: {}
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    setLoggedOut: (state) => {
      state.loggedIn = false;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLoadingMessage: (state, action) => {
      state.loadingMessage = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setLoggedOut, setRooms, setLoadingMessage } = loginSlice.actions

export default loginSlice.reducer