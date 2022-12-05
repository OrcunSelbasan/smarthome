import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function Modes(props) {
  const modes = ["m1", "m2", "m3", "m4", "m5"];

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate("CreateMode")
        }
        style={styles.createModeContainer}
      >
        <Text style={styles.createMode}>Create Mode</Text>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 24,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#fff" }} />
        <View>
          <Text
            style={{
              width: 80,
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
            }}
          >
            Existing Modes
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#fff" }} />
      </View>
      <ScrollView style={{width: "100%"}}>
        {modes.map((m, i) => (
          <View key={i} style={{width: "100%", alignItems: "center"}}>
              <TouchableHighlight
                onPress={() =>
                  props.navigation.navigate("InfoMode", {
                    id: i,
                    name: m,
                  })
                }
                style={styles.modeContainer}
              >
                <Text style={styles.modeName}>{m}</Text>
              </TouchableHighlight>
          </View>
        ))}
        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#020212",
    height: "100%",
    paddingVertical: 32,
    display: "flex",
    alignItems: "center",
  },
  modeContainer: {
    width: "80%",
    backgroundColor: "#232323",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 16,
  },
  createModeContainer: {
    width: "80%",
    backgroundColor: "#403FFC",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 16,
  },
  createMode: {
    fontSize: 24,
    paddingVertical: 16,
    color: "#fff",
  },
  modeName: {
    fontSize: 20,
    paddingVertical: 16,
    color: "#fff",
  },
});
