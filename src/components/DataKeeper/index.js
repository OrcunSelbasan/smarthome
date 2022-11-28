import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
const DataKeeper = () => {
  const currentDate = new Date().toLocaleDateString();

  const [time, setTime] = useState(currentDate);
  return (
    <View style={styles.container}>
      <Text style={styles.dailyDate}>{time}</Text>
      <Text style={styles.upToNow}>Up to now</Text>
      <Text style={styles.dataInfo}>Total usage of kW:</Text>
      <Text style={styles.dataInfo}>Total usage time of light:</Text>
      <Text style={styles.dataInfo}>
        Brightness: 10
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 200,
    backgroundColor: "#232323",
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 30,
    padding: 20
  },
  dailyDate: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D9D6D9",
    marginLeft: 10,
  },
  upToNow: {
    fontSize: 20,
    color: "#D9D6D9",
    marginLeft: 10,
    paddingBottom: 20,
  },
  dataInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D9D6D9",
    marginLeft: 10,
  },
});

export default DataKeeper;
