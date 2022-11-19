import React from "react";
import { StyleSheet, View } from "react-native";
import AddingBoard from "../../components/AddingBoard";
import ColorScheme from "../../components/ColorScheme";
import ColorSchemeAvailability from "../../components/ColorSchemeAvailability";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function Light(props) {
  return (
    <>
      <ColorSchemeAvailability
        onAvailabilityChange={props.handleAvailability}
        headerColor={"Color Scheme Availability"}
      />
      {props.isAvailableScheme && (
        <ColorScheme onColorSelect={props.handleColors} />
      )}
      <CustomSwitchButton
        buttonName={"Remote Power Options"}
        marginLeft={0}
        fontSize={20}
        onSwitchChange={props.handleRemotePower}
      />
      {props.remotePower && (
        <>
          <CustomSwitchButton
            buttonName={"Sunlight Effect"}
            marginLeft={0}
            fontSize={20}
            onSwitchChange={props.handleSunlight}
          />
          <CustomSwitchButton
            buttonName={"Smart Light"}
            marginLeft={0}
            fontSize={20}
            onSwitchChange={props.handleSmartlight}
          />
        </>
      )}
      <AddingBoard />
    </>
  );
}

{
  /* <View
style={{
  marginTop: 20,
  borderBottomColor: "white",
  borderBottomWidth: StyleSheet.hairlineWidth,
}}
/> */
}
