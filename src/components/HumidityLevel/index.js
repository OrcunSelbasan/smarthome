import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

const HumidityLevel = () => {
  const [range, setRange] = useState(300);

  return (
    <View style={styles.container}>
      <View style={styles.compositeStat}>
        <View style={styles.compositeText}>
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
            value={0.5}
            onValueChange={(value) => setRange(parseInt(value * 1000))}
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