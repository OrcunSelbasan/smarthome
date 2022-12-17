import React, { useEffect } from "react";
import ColorScheme from "../../components/ColorScheme";
import ColorSchemeAvailability from "../../components/ColorSchemeAvailability";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function Light(props) {
  return (
    <>
      <ColorSchemeAvailability
        onAvailabilityChange={props.handleAvailability}
        headerColor={"Color Scheme Availability"}
        chosenOption={props.data.isAvailableScheme}
        room={props.room}
      />
      {props.data.isAvailableScheme && (
        <ColorScheme
          colors={["red", "green", "blue", "white", "yellow"]}
          checkedColors={Object.keys(props.data.colors).filter(
            (c) => props.data.colors[c]
          )}
          isOnRoom={props.data.isAvailableScheme}
          onColorSelect={props.handleColors}
          room={props.room}
          usedInRoom={false}
        />
      )}
      <CustomSwitchButton
        buttonName={"Remote Power Options"}
        style={{ fontSize: 20, marginLeft: 0 }}
        isEnabledButton={props.data.remotePower}
        onSwitchChange={props.handleRemotePower}
        room={props.room}
      />
      <CustomSwitchButton
        buttonName={"Brightness Select"}
        style={{ fontSize: 20, marginLeft: 0 }}
        isEnabledButton={props.data.brightnessSelect}
        onSwitchChange={props.handleBrightnessOption}
        room={props.room}
      />
      <CustomSwitchButton
        buttonName={"Sunlight Effect"}
        style={{ fontSize: 20, marginLeft: 0 }}
        isEnabledButton={props.data.sunlight}
        onSwitchChange={props.handleSunlight}
        room={props.room}
      />
      <CustomSwitchButton
        buttonName={"Smart Light"}
        style={{ fontSize: 20, marginLeft: 0 }}
        isEnabledButton={props.data.smartlight}
        onSwitchChange={props.handleSmartlight}
        room={props.room}
      />
    </>
  );
}
