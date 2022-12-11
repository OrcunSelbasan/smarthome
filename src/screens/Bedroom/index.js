import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RoomScreen from "../../components/RoomScreen";
import bedroomIcon from "../../../assets/images/bedroomIcon.png";
import settingsIcon from "../../../assets/images/settingsIcon.png";
import { useSelector } from "react-redux";

const Bedroom = (props) => {
  const userCredential = useSelector((state) => state.login);

  return (
    <View style={styles.container}>
      <RoomScreen
        functionalities={userCredential.rooms.bedroom}
        username={userCredential.user.username}
        bleStatus="BLE ON"
        img={bedroomIcon}
        title="Bedroom"
        setIcon={settingsIcon}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
});

export default Bedroom;
