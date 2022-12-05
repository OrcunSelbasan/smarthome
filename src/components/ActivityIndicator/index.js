import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { string } from "prop-types";

const Loading = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#57E7CB" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

Loading.propTypes = {
  message: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  text: {
    color: "white",
    marginTop: 20,
    fontSize: 20,
  },
});

export default Loading;
