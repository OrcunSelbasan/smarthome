import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ColorScheme({ onColorSelect }) {
  return (
    <View style={styles.colorScheme}>
      <Text style={styles.deviceBrandText}>Color Scheme</Text>
      <View style={styles.container}>
        <BouncyCheckbox
          style={{ width: 28, marginRight: 10 }}
          disableText={true}
          size={25}
          fillColor="red"
          unfillColor="transparent"
          iconStyle={{ borderColor: "red", borderRadius: 10 }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
          onPress={(isChecked) => onColorSelect("red", isChecked)}
        />
        <BouncyCheckbox
          style={{ width: 28, marginRight: 10 }}
          disableText={true}
          size={25}
          fillColor="green"
          unfillColor="transparent"
          iconStyle={{ borderColor: "red", borderRadius: 10 }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
          onPress={(isChecked) => onColorSelect("green", isChecked)}
        />
        <BouncyCheckbox
          style={{ width: 28, marginRight: 10 }}
          disableText={true}
          size={25}
          fillColor="blue"
          unfillColor="transparent"
          iconStyle={{ borderColor: "red", borderRadius: 10 }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
          onPress={(isChecked) => onColorSelect("blue", isChecked)}
        />
        <BouncyCheckbox
          style={{ width: 28, marginRight: 10 }}
          disableText={true}
          size={25}
          fillColor="white"
          unfillColor="transparent"
          iconStyle={{ borderColor: "red", borderRadius: 10 }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
          onPress={(isChecked) => onColorSelect("white", isChecked)}
        />
        <BouncyCheckbox
          style={{ width: 28, marginRight: 10 }}
          disableText={true}
          size={25}
          fillColor="yellow"
          unfillColor="transparent"
          iconStyle={{ borderColor: "red", borderRadius: 10 }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
          onPress={(isChecked) => onColorSelect("yellow", isChecked)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  deviceBrandText: {
    color: "#D9D6D9",
    fontSize: 16,
    paddingBottom: 15,
  },
  colorScheme: {
    marginTop: 15,
    paddingHorizontal: 5,
  },
});
