import { StyleSheet, Text, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { useState } from "react";
import { useEffect } from "react";
import { string, bool, func } from "prop-types";

const radioButtonsData = [
  {
    id: "1",
    label: "Yes",
    labelStyle: { color: "#fff" },
    value: "yes",
    color: "#fff",
    borderColor: "#fff",
  },
  {
    id: "2",
    label: "No",
    labelStyle: { color: "#fff" },
    value: "no",
    color: "#fff",
    borderColor: "#fff",
  },
];

const ColorSchemeAvailability = ({
  headerColor,
  onAvailabilityChange,
  chosenOption,
  room,
}) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  console.log(room);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    const selectedOption = radioButtonsArray.find((opt) => opt.selected);
    onAvailabilityChange(selectedOption.label === "Yes" ? true : false, room);
  }

  useEffect(() => {
    setRadioButtons([
      { ...radioButtonsData[0], selected: chosenOption },
      { ...radioButtonsData[1], selected: !chosenOption },
    ]);
  }, []);

  return (
    <View style={styles.deviceBrand}>
      <Text style={styles.deviceBrandText}> {headerColor} </Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
    </View>
  );
};

ColorSchemeAvailability.propTypes = {
  headerColor: string,
  onAvailabilityChange: func,
  chosenOption: bool,
  room: string,
};

const styles = StyleSheet.create({
  deviceBrand: {
    width: 330,
    borderBottomWidth: 1,
  },
  deviceBrandText: {
    color: "#D9D6D9",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  deviceBrandSelection: {
    color: "#D9D6D9",
    fontSize: 20,
    paddingTop: 20,
  },
  radioButtonsStyle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default ColorSchemeAvailability;
