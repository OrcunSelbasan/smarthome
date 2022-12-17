import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, View, Text, StyleSheet } from "react-native";
import { string, func, bool, any, object } from "prop-types";

const CustomSwitchButton = ({
  buttonName,
  onSwitchChange,
  isEnabledButton,
  room,
  style,
}) => {
  const [isEnabled, setIsEnabled] = useState(isEnabledButton ?? false);
  const toggleSwitch = () => {
    // ! WE MADE REQUESTS HERE, RELATED CODE MOVED TO ROOMACTIONS.JS
    switch (buttonName) {
      case "Power":
        console.log("action 0");
      case "Window":
        console.log("action 1");
      case "Smart Light Mode":
        console.log("action 2");
      case "Sunlight Effect":
        console.log("action 3");
      case "Air Humidifier":
        console.log("action 4");
    }

    setIsEnabled((previousState) => !previousState);
    onSwitchChange(!isEnabled, room); // ! TODO: MIGHT CAUSE BUG!!!
  };

  useEffect(() => {}, [isEnabledButton]);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.buttonName, ...style }}>{buttonName}: </Text>
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
