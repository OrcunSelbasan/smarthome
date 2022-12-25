import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorScheme from "../ColorScheme";

function LightColorPicker({ isOnRoom, colors, room }) {
  
  const [activeColor, setActiveColor] = useState("");

  function handleActiveColor(color, isChecked, room, colors) {
    let selectedColor = isChecked ? colors.filter(c => c === color)[0] : "";
    setActiveColor(selectedColor)
  }

  return (
    <View style={styles.container}>
      {colors.length != 0 && (
        <Text style={{ color: "white", fontSize: 24 }}>Color</Text>
      )}
      <ColorScheme
        isOnRoom={isOnRoom}
        colors={colors}
        room={room}
        activeColor={activeColor}
        usingActiveColor={true}
        onColorSelect={handleActiveColor}
      />
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
    marginBottom: 30,
  },
});
export default LightColorPicker;
