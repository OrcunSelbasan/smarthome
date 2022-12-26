// import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { toggleAction } from "../../api/controllers/roomActions";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";

const CustomBrightnessSlider = (props) => {
  const [shownRange, setShownRange] = useState(props.brightnessLevel ?? 0);
  const ip = useSelector((state) => state.login.ipAddress);

  function handleChange(value) {
    value = parseInt(value * 100);
    toggleAction(
      "http://" + ip + ":52170" + "/room",
      props.room,
      "brightness",
      value
    );
    console.log("Request send Brigthness: " + value);
  }

  const debouncedChangeHandler = useCallback(debounce(handleChange, 500), []);

  return (
    <View style={styles.container}>
      <View style={styles.compositeStat}>
        <View>
          <Text style={styles.text}>Brightness: {shownRange}%</Text>
        </View>
        <View style={styles.brightLevelBar}>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#5857F3"
            maximumTrackTintColor="#D9D6D9"
            thumbTintColor="#5857F3"
            onValueChange={(value) => {
              setShownRange(parseInt(value * 100));
              debouncedChangeHandler(value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    borderRadius: 10,
    width: 340,
    height: 50,
  },
  compositeStat: {
    flexDirection: "row",
  },
  text: {
    color: "#D9D6D9",
    fontSize: 12,
    marginTop: 18,
    marginLeft: 20,
  },
  brightLevelBar: {
    marginTop: 6,
  },
});

export default CustomBrightnessSlider;
