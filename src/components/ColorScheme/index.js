import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { func, bool, array } from "prop-types";

export default function ColorScheme({ onColorSelect, isOnRoom, colors, checkedColors, room }) {
  // TODO: USE PROPS FOR DYNAMIC COLOR SELECT
  return (
    <View style={styles.colorScheme}>
      {isOnRoom ? null : (
        <Text style={styles.deviceBrandText}>Color Scheme</Text>
      )}
      <View style={styles.container}>
        {colors.map((color) => (
          <BouncyCheckbox
            key={color}
            style={{ width: 28, marginRight: 10 }}
            disableText={true}
            size={25}
            fillColor={color}
            unfillColor="transparent"
            isChecked={checkedColors?.includes(color)}
            iconStyle={{ borderColor: color, borderRadius: 10 }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
            onPress={(isChecked) =>
              isOnRoom ? onColorSelect(color, isChecked, room) : () => {}
            }
          />
        ))}
      </View>
    </View>
  );
}

ColorScheme.propTypes = {
  onColorSelect: func.isRequired,
  isOnRoom: bool,
  colors: array,
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  deviceBrandText: {
    color: "#D9D6D9",
    fontSize: 16,
    paddingBottom: 15,
  },
  colorScheme: {
    marginTop: 15,
    paddingHorizontal: 5,
  },
});
