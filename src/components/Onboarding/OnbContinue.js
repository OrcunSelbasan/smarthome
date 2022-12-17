import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setIsNotFirstLaunch } from "../../../features/onboardingSlice";

const OnbContinue = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(setIsNotFirstLaunch(props.isFirstLaunch))}
    >
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 115,
    right: 10,
    zIndex: 10,
    marginHorizontal: 10,
    backgroundColor: "#403FFC",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderStyle: "solid",
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default OnbContinue;