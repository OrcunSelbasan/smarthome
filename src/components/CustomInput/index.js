import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ placeholder, onInput, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} autoCorrect={false} autoCapitalize="none" onChangeText={(text) => onInput(text)} {...props}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderColor: "#5857F3",
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    height: 45,
    padding: 10,
    marginVertical: 5,
  },
  input: {
    fontSize: 16
  },
});

export default CustomInput;
