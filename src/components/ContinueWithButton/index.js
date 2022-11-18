import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";

const ContinueWithButton = ({ onPress, text, img }) => {
  return (
    <View style={styles.button}>
      <View style={styles.compositeCont}>
        <View style={styles.imageContainer}>
          <Image source={img} />
        </View>
        <Pressable onPress={onPress} style={styles.container}>
          <Text style={styles.text}> {text}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderColor: "#5857F3",
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    padding: 15,
    marginVertical: 5,
  },
  compositeCont: {    
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignContent: "center",
  },
  imageContainer: {
    height: "100%",
  },  
  text: {
    fontWeight: "bold",
    fontSize: 20
  },
});

export default ContinueWithButton;
