import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { array } from "prop-types";

const data = [
  { label: "Mode LR", value: "1" },
  { label: "Mode GAMING", value: "2" },
  { label: "Mode NETFLIX", value: "3" },
  { label: "Mode DEFAULT", value: "4" },
];

const CustomDropdown = ({ modes }) => {
  const [value, setValue] = useState("Custom");
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={modes ?? []}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Custom"
        searchPlaceholder="Search mode"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

CustomDropdown.propTypes = {
  modes: array,
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#020212",
    padding: 16,
    width: 200,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: "white",
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#5857F3",
    fontWeight: "bold",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
