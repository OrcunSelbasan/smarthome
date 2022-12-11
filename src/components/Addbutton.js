import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setRooms } from "../../features/loginSlice";
import { updateRooms } from "../api/controllers/roomController";
import { string, object } from "prop-types";

const Addbutton = ({ buttonName, state }) => {
  const userCredentials = useSelector((state) => state.login.rooms);
  const uid = useSelector((state) => state.login.user.uid);
  const dispatch = useDispatch();
  function update() {
    const rooms = {
      ...userCredentials,
      livingroom: {
        brightnessSelect: {
          brightnessLevel:
            userCredentials.livingroom.brightnessSelect.brightnessLevel,
          isAvailable: state.livingroom.brightnessSelect,
        },
        colorSelect: {
          colors: Object.keys(state.livingroom.colors).filter(
            (key) => state.livingroom.colors[key]
          ),
          isAvailable: state.livingroom.isAvailableScheme,
        },
        humidifierAdjustmentSelect: {
          humidityLevel:
            userCredentials.livingroom.humidifierAdjustmentSelect.humidityLevel,
          isAvailable: state.livingroom.adjustableAirHumidifier,
        },
        humidifierSelect: {
          isAvailable: state.livingroom.airHumidifier,
          isEnabled: userCredentials.livingroom.humidifierSelect.isEnabled,
        },
        powerSelect: {
          isAvailable: state.livingroom.remotePower,
          isEnabled: userCredentials.livingroom.powerSelect.isEnabled,
        },
        smartSelect: {
          isAvailable: state.livingroom.smartlight,
          isEnabled: userCredentials.livingroom.powerSelect.isEnabled,
        },
        sunlightSelect: {
          isAvailable: state.livingroom.sunlight,
          isEnabled: userCredentials.livingroom.powerSelect.isEnabled,
        },
        windowSelect: {
          isAvailable: state.livingroom.window,
          isEnabled: userCredentials.livingroom.powerSelect.isEnabled,
        },
      },
      bedroom: {
        brightnessSelect: {
          brightnessLevel:
            userCredentials.bedroom.brightnessSelect.brightnessLevel,
          isAvailable: state.bedroom.brightnessSelect,
        },
        colorSelect: {
          colors: Object.keys(state.bedroom.colors).filter(
            (key) => state.bedroom.colors[key]
          ),
          isAvailable: state.bedroom.isAvailableScheme,
        },
        humidifierAdjustmentSelect: {
          humidityLevel:
            userCredentials.bedroom.humidifierAdjustmentSelect.humidityLevel,
          isAvailable: state.bedroom.adjustableAirHumidifier,
        },
        humidifierSelect: {
          isAvailable: state.bedroom.airHumidifier,
          isEnabled: userCredentials.bedroom.humidifierSelect.isEnabled,
        },
        powerSelect: {
          isAvailable: state.bedroom.remotePower,
          isEnabled: userCredentials.bedroom.powerSelect.isEnabled,
        },
        smartSelect: {
          isAvailable: state.bedroom.smartlight,
          isEnabled: userCredentials.bedroom.smartSelect.isEnabled,
        },
        sunlightSelect: {
          isAvailable: state.bedroom.sunlight,
          isEnabled: userCredentials.bedroom.sunlightSelect.isEnabled,
        },
        windowSelect: {
          isAvailable: state.bedroom.window,
          isEnabled: userCredentials.bedroom.windowSelect.isEnabled,
        },
      },
    };
    dispatch(setRooms(rooms));
    updateRooms(uid, rooms);
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => update()} style={styles.touchableButton}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

Addbutton.propTypes = {
  buttonName: string,
  state: object,
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
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

export default Addbutton;
