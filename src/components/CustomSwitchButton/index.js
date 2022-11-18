import React, { useState } from "react";
import { Switch, View, Text, StyleSheet } from "react-native";

const CustomSwitchButton = ({ buttonName }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.buttonName}>{buttonName}: </Text>
      <Switch
        trackColor={{ false: "#FF6953", true: "#57E7CB" }}
        thumbColor={isEnabled ? "white" : "#FF6953"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D9D6D9",
    marginLeft: 20,
    width: "75%",
  },
});

export default CustomSwitchButton;
