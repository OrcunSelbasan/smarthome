import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DeviceType from "../../components/DeviceType";
import NameInput from "../../components/NameInput";
import AddingBoard from "../../components/AddingBoard";
import Colorbrightness from "../../components/Colorbrightness";

const AddingDevice = () => {
  return (
    <View style={styles.makePadding}>
      <View style={styles.addingNewDevice}>
        <Text style={styles.addingNewDeviceText}> Add New Devices </Text>
      </View>
      <View style={styles.deviceProperitiesContainer}>
        <NameInput headerName={"Device Name"} />
        <DeviceType headerDevice={"Device Type"} />
        <Colorbrightness headerColorbrightness={"Color/Brightness"} />
        <AddingBoard />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.touchableButton}>
            <Text style={styles.buttonText}>Add Device</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  makePadding: {
    paddingHorizontal: 30,
    paddingTop: 70,
    backgroundColor: "#020212",
    height: "100%",
  },
  addingNewDevice: {
    flexDirection: "row",
    marginLeft: 90,
  },
  addingNewDeviceText: {
    color: "#D9D6D9",
    fontSize: 20,
  },
  deviceProperitiesContainer: {
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  touchableButton: {
    width: 250,
    height: 50,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#5857F3",
    alignItems: "center",
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 22,
    color: "#D9D6D9",
  },
});
export default AddingDevice;
