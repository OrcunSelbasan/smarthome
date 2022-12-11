import React from "react";
import { Text, View } from "react-native";

const OnbTutorial = (props) => {
  return (
    <View style={props.styles.container}>
      <View style={props.styles.body}>
        <Text style={props.styles.header}>{props.header}</Text>
        <Text style={props.styles.description}>{props.description}</Text>
        {props.image}
      </View>
      <View style={props.styles.bottomNavigation}>{props.children}</View>
    </View>
  );
};

export default OnbTutorial;
