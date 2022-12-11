import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { string, func, bool } from "prop-types";

const CustomInput = ({ placeholder, onInput, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => onInput(text)}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

CustomInput.propTypes = {
  placeholder: string,
  onInput: func,
  secureTextEntry: bool,
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
    fontSize: 16,
  },
});

export default CustomInput;
