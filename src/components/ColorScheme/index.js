import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ColorScheme({ onColorSelect, ...props }) {
  return (
    <View style={styles.colorScheme}>
      {props.isOnRoom ? null : (
        <Text style={styles.deviceBrandText}>Color Scheme</Text>
      )}
      <View style={styles.container}>
        {["red", "green", "blue", "white", "yellow"].map((color) => (
          <BouncyCheckbox
            style={{ width: 28, marginRight: 10 }}
            disableText={true}
            size={25}
            fillColor={color}
            unfillColor="transparent"
            iconStyle={{ borderColor: color, borderRadius: 10 }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
            onPress={(isChecked) =>
              props.isOnRoom ? onColorSelect(color, isChecked) : onColorSelect()
            }
          />
        ))}
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
