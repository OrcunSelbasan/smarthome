import React from "react";
import { Text, View } from "react-native";
import Accordion from "../../components/Accordion";

export default function EditMode(props) {
  const {id = "", name = ""} = props.route?.params ?? {id: "", name: ""};
  return (
    <View>
      <Text>Edit Mode</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Accordion />
    </View>
  );
}
