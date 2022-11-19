import React from "react";
import AddingBoard from "../../components/AddingBoard";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function AirHumidifier(props) {
  return (
    <>
      <CustomSwitchButton
        buttonName={"Adjustable Air Humidifier"}
        marginLeft={0}
        fontSize={20}
        onSwitchChange={props.handleAirHumidifier}
      />
      <AddingBoard />
    </>
  );
}
