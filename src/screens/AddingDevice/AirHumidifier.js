import React from "react";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function AirHumidifier(props) {
  return (
    <>
      <CustomSwitchButton
        isEnabledButton={props.data.airHumidifier}
        buttonName={"Enable Air Humidifier"}
        style={{ fontSize: 20, marginLeft: 0 }}
        onSwitchChange={props.handleAirHumidifier}
        room={props.room}
      />
      <CustomSwitchButton
        isEnabledButton={props.data.adjustableAirHumidifier}
        buttonName={"Adjustable Air Humidifier"}
        style={{ fontSize: 20, marginLeft: 0 }}
        onSwitchChange={props.handleAdjustableAirHumidifier}
        room={props.room}
      />
    </>
  );
}
