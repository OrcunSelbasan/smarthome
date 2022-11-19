import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddingDevice from "../screens/AddingDevice";
import Bedroom from "../screens/Bedroom";
import LivingRoom from "../screens/LivingRoom";
import OnboardingScreen from "../screens/Onboarding";
import SignInScreen from "../screens/SignInScreen";

const Tab = createBottomTabNavigator();

export const renderOnboarding = () => (
  <Tab.Screen
    name="Onboarding"
    component={OnboardingScreen}
    options={{ title: "Welcome" }}
  />
);

export const renderLogin = () => (
  <Tab.Screen
    name="SignIn"
    component={SignInScreen}
    options={{ title: "SignIn" }}
  />
);

export const renderApp = () => (
  <>
    <Tab.Screen
      name="LivingRoom"
      component={LivingRoom}
      options={{ title: "Living Room" }}
    />
    <Tab.Screen
      name="Bedroom"
      component={Bedroom}
      options={{ title: "Bedroom" }}
    />
    <Tab.Screen
      name="AddDevice"
      component={AddingDevice}
      options={{ title: "Add Device" }}
    />
  </>
);

export const screenOptions = (route) => ({
  headerShown: false,
  tabBarStyle: {
    display:
      route.name === "Onboarding" || route.name === "SignIn" ? "none" : "block",
    paddingHorizontal: 5,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    borderTopWidth: 0,
  },
});
