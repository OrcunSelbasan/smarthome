import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import onboardingReducer from "../features/onboardingSlice";
import loginReducer from "../features/loginSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        onboarding: onboardingReducer,
        login: loginReducer
    },
});