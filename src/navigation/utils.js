import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import AddingDevice from "../screens/AddingDevice";
import Bedroom from "../screens/Bedroom";
import LivingRoom from "../screens/LivingRoom";
import AddModeScreen from "../screens/Modes/AddMode";
import EditModeScreen from "../screens/Modes/EditMode";
import ModesScreen from "../screens/Modes";
import OnboardingScreen from "../screens/Onboarding";
import SignInScreen from "../screens/SignInScreen";
import InfoMode from "../screens/Modes/InfoMode";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      options={{ title: "Devices" }}
    />
    <Tab.Screen
      name="Modes"
      component={Modes}
      options={{ title: "Modes", unmountOnBlur: true }}
    />
  </>
);

const modesScreenOptions = {
  headerBackTitleVisible: false,
  headerTintColor: "#403FFC",
};

export const Modes = (props) => {
  useEffect(() => {
    props.navigation.navigate("Modes");
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#020212", height: 140 },
        headerTitleStyle: { color: "#D9D6D9", fontSize: 32 },
      }}
    >
      <Stack.Screen
        name="ModesList"
        options={{
          title: "Modes",
          ...modesScreenOptions,
        }}
        component={ModesScreen}
      />
      <Stack.Screen
        name="InfoMode"
        options={{
          title: "Mode Information",
          ...modesScreenOptions,
        }}
        component={InfoMode}
      />
      <Stack.Screen
        name="CreateMode"
        options={{
          title: "Create a Mode",
          ...modesScreenOptions,
        }}
        component={AddModeScreen}
      />
      <Stack.Screen
        name="EditMode"
        options={{
          title: "Edit a Mode",
          ...modesScreenOptions,
        }}
        component={EditModeScreen}
      />
    </Stack.Navigator>
  );
};

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
