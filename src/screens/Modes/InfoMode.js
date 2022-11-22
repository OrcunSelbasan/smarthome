import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export default function InfoMode(props) {
  const { id, name } = props.route.params;
  return (
    <View>
      <Text>
        Info Mode - {id} - {name}
      </Text>
      <TouchableHighlight onPress={() => {
        props.navigation.navigate("EditMode", {
            ...props.route.params
        })
      }}>
        <Text>Change</Text>
      </TouchableHighlight>
    </View>
  );
}
