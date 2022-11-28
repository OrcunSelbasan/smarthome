import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ModeSelection from "../../components/ModeSelection";
import NameInput from "../../components/NameInput";
import { Component } from "react";
import CancelButton from "./CancelSaveButton/CancelButton";
import SaveButton from "./CancelSaveButton/SaveButton";

class AddMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modeName: "",
      type: "",
    };
  }
  handleName = (value) => this.setState((state) => ({ ...state, name: value }));
  handleRoom = (value) => this.setState((state) => ({ ...state, type: value }));

  render() {
    console.log(this.state);
    return (
      <View style={styles.makePadding}>
        <ScrollView>
          <View style={styles.modeContainer}>
            <NameInput
              onNameChange={this.handleName}
              headerName={"Mode Name"}
              placeholder={"Enter the name of the mode"}
            />
            <ModeSelection
              headerDevice={"Choose a room to add the mode"}
              onTypeChange={this.handleRoom}
            />

            {this.state.type &&
              (this.state.type === "BEDROOM" ? (
                <Text style={{ color: "yellow" }}>Chosen Bedroom</Text>
              ) : (
                <Text style={{ color: "yellow" }}>Chosen Living Room</Text>
              ))}
              <View style={styles.cancelSaveButtons}>
              <View style={styles.cancelButton}>
              <CancelButton />
              </View>
              <SaveButton />
              </View>
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
    backgroundColor: "#020212",
    height: "100%",
  },
  modeContainer: {
    marginTop: 25,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cancelSaveButtons: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 250
  },
  cancelButton: {
    marginRight: 60
  }
});
export default AddMode;
