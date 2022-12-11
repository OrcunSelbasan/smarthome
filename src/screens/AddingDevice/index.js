import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useReducer } from "react";
import Light from "./Light";
import Window from "./Window";
import AirHumidifier from "./AirHumidifier";
import Addbutton from "../../components/Addbutton";
import { useSelector } from "react-redux";

const initialState = (lrdata, brdata) => ({
  livingroom: {
    type: "",
    isAvailableScheme: lrdata.colorSelect.isAvailable,
    colors: {
      red: lrdata.colorSelect.colors.includes("red"),
      green: lrdata.colorSelect.colors.includes("green"),
      blue: lrdata.colorSelect.colors.includes("blue"),
      white: lrdata.colorSelect.colors.includes("white"),
      yellow: lrdata.colorSelect.colors.includes("yellow"),
    },
    brightnessSelect: lrdata.brightnessSelect.isAvailable,
    remotePower: lrdata.powerSelect.isAvailable,
    sunlight: lrdata.sunlightSelect.isAvailable,
    smartlight: lrdata.smartSelect.isAvailable,
    window: lrdata.windowSelect.isAvailable,
    airHumidifier: lrdata.humidifierSelect.isAvailable,
    adjustableAirHumidifier: lrdata.humidifierAdjustmentSelect.isAvailable,
  },
  bedroom: {
    type: "",
    isAvailableScheme: brdata.colorSelect.isAvailable,
    colors: {
      red: brdata.colorSelect.colors.includes("red"),
      green: brdata.colorSelect.colors.includes("green"),
      blue: brdata.colorSelect.colors.includes("blue"),
      white: brdata.colorSelect.colors.includes("white"),
      yellow: brdata.colorSelect.colors.includes("yellow"),
    },
    brightnessSelect: brdata.brightnessSelect.isAvailable,
    remotePower: brdata.powerSelect.isAvailable,
    sunlight: brdata.sunlightSelect.isAvailable,
    smartlight: brdata.smartSelect.isAvailable,
    window: brdata.windowSelect.isAvailable,
    airHumidifier: brdata.humidifierSelect.isAvailable,
    adjustableAirHumidifier: brdata.humidifierAdjustmentSelect.isAvailable,
  },
});

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_ROOM": {
      return {
        ...action.payload,
      };
    }
    case "CHANGE_TYPE": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          type: action.payload,
        },
      };
    }
    case "CHANGE_AVAILABILITY": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          isAvailableScheme: action.payload,
        },
      };
    }
    case "CHANGE_REMOTE_POWER": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          remotePower: action.payload,
        },
      };
    }
    case "CHANGE_SUNLIGHT": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          sunlight: action.payload,
        },
      };
    }
    case "CHANGE_SMARTLIGHT": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          smartlight: action.payload,
        },
      };
    }
    case "CHANGE_WINDOW": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          window: action.payload,
        },
      };
    }
    case "CHANGE_AIR_HUMIDIFIER": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          airHumidifier: action.payload,
        },
      };
    }
    case "CHANGE_ADJUSTABLE_AIR_HUMIDIFIER": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          adjustableAirHumidifier: action.payload,
        },
      };
    }
    case "CHANGE_BRIGHTNESS_SELECT": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          brightnessSelect: action.payload,
        },
      };
    }
    case "CHANGE_COLORS": {
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          colors: { ...state[action.room].colors, ...action.payload },
        },
      };
    }
  }
}

const AddingDevice = (props) => {
  const userCredential = useSelector((state) => state.login);
  const [state, dispatch] = useReducer(
    reducer,
    initialState(
      userCredential.rooms["livingroom"],
      userCredential.rooms["bedroom"]
    )
  );

  const handleAvailability = (value, room) =>
    dispatch({ type: "CHANGE_AVAILABILITY", room, payload: value });
  const handleRemotePower = (value, room) =>
    dispatch({ type: "CHANGE_REMOTE_POWER", room, payload: value });
  const handleSunlight = (value, room) =>
    dispatch({ type: "CHANGE_SUNLIGHT", room, payload: value });
  const handleSmartlight = (value, room) =>
    dispatch({ type: "CHANGE_SMARTLIGHT", room, payload: value });
  const handleWindow = (value, room) =>
    dispatch({ type: "CHANGE_WINDOW", room, payload: value });
  const handleAirHumidifier = (value, room) =>
    dispatch({ type: "CHANGE_AIR_HUMIDIFIER", room, payload: value });
  const handleAdjustableAirHumidifier = (value, room) =>
    dispatch({
      type: "CHANGE_ADJUSTABLE_AIR_HUMIDIFIER",
      room,
      payload: value,
    });
  const handleBrightnessSelect = (value, room) =>
    dispatch({ type: "CHANGE_BRIGHTNESS_SELECT", room, payload: value });
  const handleColors = (key, value, room) =>
    dispatch({ type: "CHANGE_COLORS", room, payload: { [key]: value } });

  return (
    <View style={styles.makePadding}>
      <ScrollView>
        <View style={styles.addingNewDevice}>
          <Text style={styles.addingNewDeviceText}>Configure Devices</Text>
        </View>
        <View style={styles.devicePropertiesContainer}>
          {/* <AddingBoard onRoomChange={handleRoom} /> */}
          {/* <DeviceType headerDevice={"Device Type"} onTypeChange={handleType} /> */}
          <Text style={styles.roomHeader}>Living Room</Text>

          <>
            <Text style={styles.deviceTypeText}>Lights</Text>
            <Light
              handleBrightnessOption={handleBrightnessSelect}
              handleAvailability={handleAvailability}
              data={state.livingroom}
              room={"livingroom"}
              handleColors={handleColors}
              handleRemotePower={handleRemotePower}
              handleSunlight={handleSunlight}
              handleSmartlight={handleSmartlight}
            />
            <Text style={styles.deviceTypeText}>Window</Text>
            <Window
              data={state.livingroom}
              room={"livingroom"}
              handleWindow={handleWindow}
              isEnabledButton={state.livingroom.window}
            />
            <Text style={styles.deviceTypeText}>Air Humidifier</Text>
            <AirHumidifier
              data={state.livingroom}
              room={"livingroom"}
              handleAirHumidifier={handleAirHumidifier}
              handleAdjustableAirHumidifier={handleAdjustableAirHumidifier}
            />
          </>
          <Text style={styles.roomHeader}>Bedroom</Text>
          <>
            <Text style={styles.deviceTypeText}>Lights</Text>
            <Light
              handleBrightnessOption={handleBrightnessSelect}
              handleAvailability={handleAvailability}
              room={"bedroom"}
              data={state.bedroom}
              handleColors={handleColors}
              handleRemotePower={handleRemotePower}
              handleSunlight={handleSunlight}
              handleSmartlight={handleSmartlight}
            />
            <Text style={styles.deviceTypeText}>Window</Text>
            <Window
              data={state.bedroom}
              room={"bedroom"}
              handleWindow={handleWindow}
              isEnabledButton={state.bedroom.window}
            />
            <Text style={styles.deviceTypeText}>Air Humidifier</Text>
            <AirHumidifier
              data={state.bedroom}
              room={"bedroom"}
              handleAirHumidifier={handleAirHumidifier}
              handleAdjustableAirHumidifier={handleAdjustableAirHumidifier}
            />
          </>
        </View>
        <Addbutton state={state} buttonName={"Save"} />
        <View style={{ height: 120 }}></View>
        {/* DO NOT ERASE, PREVENTS SCROLL MISBEHAVIOR */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  makePadding: {
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: "#020212",
    height: "100%",
  },
  roomHeader: {
    backgroundColor: "white",
    colors: "black",
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    padding: 25,
    marginVertical: 40,
  },
  addingNewDevice: {
    flexDirection: "row",
    marginLeft: 90,
  },
  addingNewDeviceText: {
    color: "#D9D6D9",
    fontSize: 24,
  },
  deviceTypeText: {
    fontSize: 28,
    color: "#FFF",
    paddingTop: 24,
    textDecorationLine: "underline",
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
