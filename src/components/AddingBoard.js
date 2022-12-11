import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { func } from "prop-types";

const AddingBoard = ({ onRoomChange }) => {
  const [selectedRoom, setSelectedRoom] = useState("bedroom");

  function setStyle(roomName) {
    return selectedRoom === roomName
      ? { ...styles.images, borderWidth: 10, borderColor: "green" }
      : { ...styles.images };
  }

  function changeRoom(roomName) {
    setSelectedRoom(roomName);
    onRoomChange(roomName);
  }

  return (
    <View style={styles.addingContainer}>
      <View style={styles.roomNameContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameContainerText}>Selected Room</Text>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            onPress={() => changeRoom("bedroom")}
            style={setStyle("bedroom")}
          >
            <Image source={require("../../assets/bed-1.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeRoom("livingroom")}
            style={setStyle("livingroom")}
          >
            <Image source={require("../../assets/sofa-1.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

AddingBoard.propTypes = {
  onRoomChange: func,
};

const styles = StyleSheet.create({
  addingContainer: {
    paddingTop: 36,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  addToText: {
    color: "#D9D6D9",
    fontSize: 17,
  },
  roomNameContainer: {
    marginVertical: 25,
    width: 330,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 15,
  },
  nameContainerText: {
    fontSize: 22,
    color: "black",
  },
  ImageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 6,
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    backgroundColor: "#111222",
    borderRadius: 10,
  },
});
export default AddingBoard;
