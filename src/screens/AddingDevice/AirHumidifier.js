import React from "react";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function AirHumidifier(props) {
  return (
    <>
      <CustomSwitchButton
        isEnabledButton={props.data.airHumidifier}
        buttonName={"Enable Air Humidifier"}
        marginLeft={0}
        fontSize={20}
        onSwitchChange={props.handleAirHumidifier}
        room={props.room}
      />
      <CustomSwitchButton
        isEnabledButton={props.data.adjustableAirHumidifier}
        buttonName={"Adjustable Air Humidifier"}
        marginLeft={0}
        fontSize={20}
        onSwitchChange={props.handleAdjustableAirHumidifier}
        room={props.room}
      />
    </>
  );
}
