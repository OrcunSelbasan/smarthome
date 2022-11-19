import React from "react";
import AddingBoard from "../../components/AddingBoard";
import CustomSwitchButton from "../../components/CustomSwitchButton";

export default function Window(props) {
  return (
    <>
      {/* <CustomSwitchButton
        buttonName={"Window"}
        marginLeft={0}
        fontSize={20}
        onSwitchChange={props.handleWindow}
      /> */}
      <AddingBoard />
    </>
  );
}
