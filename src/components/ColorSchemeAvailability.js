import { StyleSheet, Text, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { useState } from "react";
import { useEffect } from "react";

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

function ColorSchemeAvailability({ headerColor, onAvailabilityChange }) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    const selectedOption = radioButtonsArray.find((opt) => opt.selected);
    onAvailabilityChange(selectedOption.label === "Yes" ? true : false);
  }

  useEffect(() => {
    setRadioButtons([
        {...radioButtonsData[0], selected: false},
        {...radioButtonsData[1], selected: true}
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
}

const styles = StyleSheet.create({
  deviceBrand: {
    width: 330,
    borderBottomWidth: 1,
  },
  deviceBrandText: {
    color: "#D9D6D9",
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom: 15,
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
