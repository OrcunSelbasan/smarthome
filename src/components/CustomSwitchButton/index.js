import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, View, Text, StyleSheet } from "react-native";
import { string, func, bool, any, object } from "prop-types";  

const CustomSwitchButton = ({ buttonName, onSwitchChange, isEnabledButton, room, style }) => {
  const [isEnabled, setIsEnabled] = useState(isEnabledButton ?? false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    onSwitchChange(!isEnabled, room); // ! TODO: MIGHT CAUSE BUG!!!
  };

  useEffect(() => {}, [isEnabledButton])

  return (
    <View style={styles.container}>
      <Text style={{...styles.buttonName, ...style }}>{buttonName}: </Text>
      <Switch
        trackColor={{ false: "#FF6953", true: "#57E7CB" }}
        thumbColor={isEnabled ? "white" : "#FF6953"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

CustomSwitchButton.propTypes = {
  buttonName: string,
  onSwitchChange: func,
  isEnabledButton: bool,
  room: any,
  style: object,
}

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
