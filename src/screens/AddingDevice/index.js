import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DeviceType from "../../components/DeviceType";
import NameInput from "../../components/NameInput";
import AddingBoard from "../../components/AddingBoard";
import { Component } from "react";
import CustomSwitchButton from "../../components/CustomSwitchButton";
import Light from "./Light";
import Window from "./Window";
import AirHumidifier from "./AirHumidifier";

class AddingDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      isAvailableScheme: false,
      colors: {
        red: false,
        green: false,
        blue: false,
        white: false,
        yellow: false,
      },
      remotePower: false,
      sunlight: false,
      smartlight: false,
      window: false,
      airHumidifier: false,
    };
  }

  handleName = (value) => this.setState((state) => ({ ...state, name: value }));
  handleType = (value) => this.setState((state) => ({ ...state, type: value }));

  handleAvailability = (value) =>
    this.setState((state) => ({ ...state, isAvailableScheme: value }));
    
  handleColors = (key, value) =>
    this.setState((state) => ({
      ...state,
      colors: { ...state.colors, [key]: value },
    }));
  handleRemotePower = (value) =>
    this.setState((state) => ({ ...state, remotePower: value }));
  handleSunlight = (value) =>
    this.setState((state) => ({ ...state, sunlight: value }));
  handleSmartlight = (value) =>
    this.setState((state) => ({ ...state, smartlight: value }));
  handleWindow = (value) =>
    this.setState((state) => ({ ...state, window: value }));
  handleAirHumidifier = (value) =>
    this.setState((state) => ({ ...state, airHumidifier: value }));

  render() {
    console.log(this.state);
    return (
      <View style={styles.makePadding}>
        <ScrollView>
          <View style={styles.addingNewDevice}>
            <Text style={styles.addingNewDeviceText}>Add New Device</Text>
          </View>
          <View style={styles.devicePropertiesContainer}>
            <NameInput
              onNameChange={this.handleName}
              headerName={"Device Name"}
              placeholder={"Enter the name of the device"}
            />
            <DeviceType
              headerDevice={"Device Type"}
              onTypeChange={this.handleType}
            />
            {this.state.type &&
              (this.state.type === "LIGHT" ? (
                <Light
                  handleAvailability={this.handleAvailability}
                  isAvailableScheme={this.state.isAvailableScheme}
                  handleColors={this.handleColors}
                  handleRemotePower={this.handleRemotePower}
                  remotePower={this.state.remotePower}
                  handleSunlight={this.handleSunlight}
                  handleSmartlight={this.handleSmartlight}
                />
              ) : this.state.type === "WINDOW" ? (
                <Window handleWindow={this.handleWindow} />
              ) : (
                <AirHumidifier handleAirHumidifier={this.handleAirHumidifier} />
              ))}
            <AddingBoard />
          </View>
          <View style={{ height: 120 }}></View>
          {/* DO NOT ERASE, PREVENTS SCROLL MISBEHAVIOR */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  makePadding: {
    paddingHorizontal: 20,
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
    fontSize: 24,
  },
  devicePropertiesContainer: {
    marginTop: 25,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    marginTop: 40,
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
