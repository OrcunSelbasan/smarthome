import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { func, string } from "prop-types";

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </Pressable>
  );
};

CustomButton.propTypes = {
  onPress: func,
  text: string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5857F3",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    height: 45,
    marginVertical: 15,
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default CustomButton;
