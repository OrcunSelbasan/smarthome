import { createSlice } from '@reduxjs/toolkit'

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    value: false,
  },
  reducers: {
    setIsFirstLaunch: (state) => {
      state.value = true;
    },
    setIsNotFirstLaunch: (state) => {
      state.value = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsFirstLaunch, setIsNotFirstLaunch } = onboardingSlice.actions

export default onboardingSlice.reducer