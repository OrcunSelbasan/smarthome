import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import debounce from "lodash.debounce";
import { toggleAction } from "../../api/controllers/roomActions";
import { useSelector } from "react-redux";

const HumidityLevel = ({rangeValue, room}) => {
  const [range, setRange] = useState(rangeValue ?? 0);
  const ip = useSelector(state => state.login.ipAddress)

  function handleChange(value) {
    value = parseInt(value * 100)
    setRange(value)
    toggleAction("http://" + ip + ":52170" + "/room", room, "airhumidifier", value);
    console.log("Request send Air Humidifier: " + value);
  }

  const debouncedChangeHandler = useCallback(
    debounce(handleChange, 500)
  , []);

  return (
    <View style={styles.container}>
      <View style={styles.compositeStat}>
        <View>
          <Text style={styles.text}>Humidity: {range}</Text>
        </View>
        <View style={styles.brightLevelBar}>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#5857F3"
            maximumTrackTintColor="#D9D6D9"
            thumbTintColor="#5857F3"
            onValueChange={debouncedChangeHandler}
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
    marginVertical: 20
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

export default HumidityLevel;