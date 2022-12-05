import { StyleSheet, Text, View } from "react-native";
import ColorScheme from "../ColorScheme";

function LightColorPicker({ isOnRoom, colors }) {
  // TODO: Finish onColorSelect
  return (
    <View style={styles.container}>
        <Text style={{color: "white", fontSize: 24}}>
            Color
        </Text>
        <ColorScheme isOnRoom={isOnRoom} colors={colors} onColorSelect={() => {console.log("WOWWOWOW")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#020212",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginBottom: 30
  },
});
export default LightColorPicker;