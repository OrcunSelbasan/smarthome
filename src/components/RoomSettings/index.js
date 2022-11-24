import React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableHighlight } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";

export default function RoomSettings(props) {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  return (
    <Tooltip
      isVisible={toolTipVisible}
      content={
        <TouchableHighlight onPress={() => {
            setToolTipVisible(false);
            props.navigation.navigate("Modes", {screen: "EditMode"});
        }} >
          <Text>Go to edit</Text>
        </TouchableHighlight>
      }
      placement="bottom"
      onClose={() => setToolTipVisible(false)}
      contentStyle={{
        width: 200,
        height: 200,
        padding: 50,
        backgroundColor: "#D9D6D9",
      }}
      arrowStyle={{ opacity: 0 }}
    >
      <TouchableHighlight onPress={() => setToolTipVisible(true)}>
        <Image
          style={{ ...styles.settingsIcon, opacity: toolTipVisible ? 0 : 1 }}
          source={props.setIcon}
        ></Image>
      </TouchableHighlight>
    </Tooltip>
  );
}

const styles = StyleSheet.create({
  settingsIcon: {
    marginTop: 30,
    marginLeft: 120,
  },
  toolTipContainer: {
    color: "#D9D6D9",
  },
});
