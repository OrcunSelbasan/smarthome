import React from "react";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function Window(props) {
  return (
    <>
      <CustomSwitchButton
        buttonName={"Enable Window"}
        onSwitchChange={props.handleWindow}
        isEnabledButton={props.isEnabledButton}
        fontSize={20}
        style={{ fontSize: 20 }}
        room={props.room}
      />
    </>
  );
}
