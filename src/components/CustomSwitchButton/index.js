import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, View, Text, StyleSheet } from "react-native";
import { string, func, bool, any, object } from "prop-types";
import { toggleAction } from "../../api/controllers/roomActions";
import { useSelector } from "react-redux";

const CustomSwitchButton = ({
  buttonName,
  onSwitchChange,
  isEnabledButton,
  room,
  style,
}) => {
  const [isEnabled, setIsEnabled] = useState(isEnabledButton ?? false);
  const ip = useSelector(state => state.login.ipAddress)
  const toggleSwitch = () => {
    // ! WE MADE REQUESTS HERE, RELATED CODE MOVED TO ROOMACTIONS.JS
    // door, window, power, brightness, smartlight, sunlight
    switch (buttonName) {
      case "Power":
        console.log("Request send", buttonName);
        toggleAction("http://" + ip + ":52170" + "/room", room, "power", !isEnabled);
        break;
      case "Window":
        console.log("Request send", buttonName);
        toggleAction("http://" + ip + ":52170" + "/room", room, "window", !isEnabled);
        break;
      case "Smart Light Mode":
        console.log("Request send", buttonName);
        toggleAction("http://" + ip + ":52170" + "/room", room, "smartlight", !isEnabled);
        break;
      case "Sunlight Effect":
        console.log("Request send", buttonName);
        toggleAction("http://" + ip + ":52170" + "/room", room, "sunlight", !isEnabled);
        break;
      case "Air Humidifier":
        console.log("Request send", buttonName);
        toggleAction("http://" + ip + ":52170" + "/room", room, "airhumidifier", !isEnabled);
        break;
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
