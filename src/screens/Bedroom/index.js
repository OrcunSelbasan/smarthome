import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RoomScreen from "../../components/RoomScreen";
import bedroomIcon from "../../../assets/images/bedroomIcon.png";
import settingsIcon from "../../../assets/images/settingsIcon.png";
import { useSelector } from "react-redux";

const Bedroom = (props) => {
  const userCredential = useSelector((state) => state.login);
  const ip = useSelector(state => state.login.ipAddress)
  return (
    <View style={styles.container}>
      <RoomScreen
        functionalities={userCredential.rooms.bedroom}
        username={userCredential.user.username}
        connectionStatus={ip.includes(" ") ? ip.split(" ")[0] : ip}
        checkIp = {ip}
        img={bedroomIcon}
        room={"bedroom"}
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
