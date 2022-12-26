import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RoomScreen from "../../components/RoomScreen";
import livingIcon from "../../../assets/images/livingIcon.png";
import settingsIcon from "../../../assets/images/settingsIcon.png";
import { useSelector } from "react-redux";

const LivingRoom = (props) => {
  const userCredential = useSelector((state) => state.login);
  const ip = useSelector(state => state.login.ipAddress)
  return (
    <View style={styles.container}>
      <RoomScreen
        functionalities={userCredential.rooms.livingroom}
        username={userCredential.user.username}
        room={"livingroom"}
        connectionStatus={ip.includes(" ") ? ip.split(" ")[0] : ip}
        checkIp = {ip}
        img={livingIcon}
        title="Living Room"
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

export default LivingRoom;
