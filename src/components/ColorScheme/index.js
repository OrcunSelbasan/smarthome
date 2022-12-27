import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { func, bool, array } from "prop-types";
import { useEffect } from "react";
import RadioButtonGroup from "react-native-animated-radio-button-group";
import { toggleAction } from "../../api/controllers/roomActions";
import { useSelector } from "react-redux";

const ColorScheme = ({
  onColorSelect,
  isOnRoom,
  colors,
  checkedColors,
  activeColor,
  usingActiveColor,
  room,
}) => {
  const data = colors.map((color, i) => {
    let actualColor = color === "turquois" ? "#40e0d0" : color;
    return {
      id: i,
      outerStyle: {
        width: 40,
        height: 40,
        borderColor: actualColor,
        borderRadius: 25,
      },
      innerStyle: {
        borderRadius: 25,
      },
      color: actualColor,
    };
  });

  const ip = useSelector(state => state.login.ipAddress)
  useEffect(() => {}, [activeColor]);

  // TODO: implement POST request to do radio button group
  return (
    <View style={styles.colorScheme}>
      {isOnRoom ? null : (
        <Text style={styles.deviceBrandText}>Color Scheme</Text>
      )}
      <View style={styles.container}>
        {usingActiveColor ? (
          <RadioButtonGroup
            data={data}
            horizontal
            onChange={(item) => {
              let actualColor = item.color === "#40e0d0" ? "turquoise" : item.color
              toggleAction(
                "http://" + ip + ":52170" + "/room",
                room,
                "changeColor",
                actualColor
              );
              console.log("Send request changeColor", actualColor);
            }}
            onPress={() => {}}
          />
        ) : (
          colors.map((color) => (
            <BouncyCheckbox
              key={color}
              style={{ width: 28, marginRight: 10 }}
              disableText={true}
              size={25}
              fillColor={color === "turquois" ? "#40e0d0" : color}
              unfillColor="transparent"
              isChecked={checkedColors?.includes(color)}
              iconStyle={{ borderColor: color, borderRadius: 10 }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
              onPress={(isChecked) => {
                return isOnRoom
                  ? onColorSelect(color, isChecked, room)
                  : () => {};
              }}
            />
          ))
        )}
      </View>
    </View>
  );
};

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

export default ColorScheme;
