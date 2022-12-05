import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, View, Text, StyleSheet } from "react-native";

const CustomSwitchButton = ({ buttonName, marginLeft, fontSize, onSwitchChange, isEnabledButton, room }) => {
  const [isEnabled, setIsEnabled] = useState(isEnabledButton ?? false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    onSwitchChange(!isEnabled, room); // ! TODO: MIGHT CAUSE BUG!!!
  };

  useEffect(() => {}, [isEnabledButton])

  return (
    <View style={styles.container}>
      <Text style={{...styles.buttonName, marginLeft, fontSize }}>{buttonName}: </Text>
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
    fontWeight: "bold",
    color: "#D9D6D9",
    width: "75%",
  },
});

export default CustomSwitchButton;
