import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsFirstLaunch,
  setIsNotFirstLaunch,
} from "../../features/onboardingSlice";
import {
  renderApp,
  renderLogin,
  renderOnboarding,
  screenOptions,
} from "./utils";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const isFirstLaunch = useSelector((state) => state.onboarding.value);
  const isLoggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.setItem("alreadyLaunched", "false");
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === "false") {
        AsyncStorage.setItem("alreadyLaunched", "true");
        dispatch(setIsFirstLaunch());
      } else {
        dispatch(setIsNotFirstLaunch());
      }
    });
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => screenOptions(route)}>
        {isFirstLaunch
          ? renderOnboarding()
          : isLoggedIn
          ? renderApp()
          : renderLogin()}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
