import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import CustomDropdown from "../CustomDropdown";
import CustomBrightnessSlider from "../CustomBrightnessSlider";
import CustomSwitchButton from "../CustomSwitchButton";
// import RoomSettings from "../RoomSettings";
import HumidityLevel from "../HumidityLevel";
import Loading from "../ActivityIndicator";
import DataKeeper from "../DataKeeper";
import ProfileIcon from "../ProfileIcon";
import LightColorPicker from "../LightColorPicker";
import { useDispatch } from "react-redux";
import { setIpAddress } from "../../../features/loginSlice";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const RoomScreen = ({
  username,
  connectionStatus,
  img,
  room,
  title,
  setIcon,
  ...props
}) => {
  const data = props.functionalities;
  const [ip, setIp] = useState("");
  const ipRef = useRef();
  const dispatch = useDispatch();
  const dropdownData = data?.modes?.map((data, i) => ({
    label: data.name,
    value: i + 1,
    ...data,
  }));

  function validateIPaddress(ip) {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ip
      )
    ) {
      return true;
    }
    return false;
  }

  return data ? (
    <View style={styles.container}>
      <View style={styles.roomScreen}>
        <View style={styles.headerComposite}>
          <View style={styles.usernameCircle}>
            <ProfileIcon
              username={username}
              style={{ username: styles.username }}
            />
          </View>
          <View style={styles.bleBar}>
            <Text style={styles.bleText}>
              <Text style={{ color: "white" }}>IP: </Text>
              {/* {connectionStatus} */}
            </Text>
            <TextInput
              style={styles.bleText}
              keyboardType="decimal-pad"
              maxLength={15}
              onChangeText={(e) => {
                e = e.replaceAll(",", ".");
                setIp(e);
              }}
              onEndEditing={() => {
                let cond = validateIPaddress(ip)
                if (cond) {
                  dispatch(setIpAddress(ip));
                } else {
                  console.log("Wrong IP address");
                }
              }}
              defaultValue={connectionStatus}
              onFocus={() => ipRef.current.clear()}
              ref={ipRef}
            />
          </View>
        </View>
        <View style={styles.iconAndTitle}>
          <View style={styles.iconScreen}>
            <View style={styles.icon}>
              <Image source={img}></Image>
            </View>
          </View>
          <Text style={styles.pageTitle}>{title}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ borderTopStartRadius: 25, borderTopEndRadius: 25 }}
      >
        <View style={styles.test}>
          <View style={styles.bodyContainer}>
            <View style={styles.bodyHeader}>
              {/* <View style={styles.dropdown}>
                <CustomDropdown modes={dropdownData} />
              </View>
              <RoomSettings {...props} setIcon={setIcon} /> */}
            </View>
            {hasFuncs(data) ? (
              <React.Fragment>
                {data?.colorSelect.isAvailable && (
                  <LightColorPicker
                    room={room}
                    isOnRoom={true}
                    colors={data?.colorSelect.colors}
                  />
                )}
                <BrightnessComponent
                  condition={data?.brightnessSelect.isAvailable}
                >
                  <CustomBrightnessSlider room={room} />
                </BrightnessComponent>
                <View style={styles.switchButtons}>
                  <SwitchComponent
                    room={room}
                    name="Power"
                    condition={data?.powerSelect.isAvailable}
                    isEnabledButton={data?.powerSelect.isEnabled}
                  />
                  <SwitchComponent
                    room={room}
                    name="Smart Light Mode"
                    condition={data?.smartSelect.isAvailable}
                    isEnabledButton={data?.smartSelect.isEnabled}
                  />
                  <SwitchComponent
                    room={room}
                    name="Sunlight Effect"
                    condition={data?.sunlightSelect.isAvailable}
                    isEnabledButton={data?.sunlightSelect.isEnabled}
                  />
                  <SwitchComponent
                    room={room}
                    name="Window"
                    condition={data?.windowSelect.isAvailable}
                    isEnabledButton={data?.windowSelect.isEnabled}
                  />
                  <SwitchComponent
                    room={room}
                    name="Air Humidifier"
                    condition={data?.humidifierSelect.isAvailable}
                    isEnabledButton={data?.humidifierSelect.isEnabled}
                  />
                </View>
                <BrightnessComponent
                  condition={data?.humidifierAdjustmentSelect.isAvailable}
                >
                  <HumidityLevel
                    range={data?.humidifierAdjustmentSelect.humidityLevel}
                    room={room}
                  />
                </BrightnessComponent>
              </React.Fragment>
            ) : (
              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 24,
                    marginVertical: 75,
                  }}
                >
                  Empty Room
                </Text>
              </View>
            )}
            <DataKeeper />
          </View>
        </View>
        <View style={{ height: 350, width: 50 }}></View>
      </ScrollView>
    </View>
  ) : (
    <View
      style={{
        backgroundColor: "black",
      }}
    >
      <Loading message="Fetching Rooms..." />
    </View>
  );
};

const SwitchComponent = ({ name, condition, isEnabledButton, room }) => {
  return (
    condition && (
      <CustomSwitchButton
        onSwitchChange={() => {}}
        style={{ fontSize: 24, marginLeft: 20 }}
        buttonName={name}
        room={room}
        isEnabledButton={isEnabledButton}
      />
    )
  );
};

const BrightnessComponent = (props) => {
  return (
    props.condition && <View style={styles.brightLevel}>{props.children}</View>
  );
};

const hasFuncs = (data) => {
  const conditions = Object.keys(data).map((key) => data[key].isAvailable);
  // [
  //   data.brightnessSelect.isAvailable,
  //   data.colorSelect.isAvailable,
  //   data.humidifierAdjustmentSelect.isAvailable,
  //   data.humidifierSelect.isAvailable,
  //   data.powerSelect.isAvailable,
  //   data.smartSelect.isAvailable,
  //   data.sunlightSelect.isAvailable,
  //   data
  // ];
  if (conditions.every((cond) => !cond)) return false;
  return true;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headerComposite: {
    flexDirection: "row",
  },
  usernameCircle: {
    backgroundColor: "#232323",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  username: {
    color: "#D9D6D9",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
    marginTop: 10,
  },
  header: {},
  bleBar: {
    backgroundColor: "#232323",
    width: 240,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 70,
    marginTop: 7,
  },
  bleText: {
    color: "#57E7CB",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 0,
  },
  iconAndTitle: {
    marginVertical: 20,
    alignItems: "center",
  },
  roomScreen: {
    alignItems: "center",
    marginTop: 80,
  },
  iconScreen: {
    width: 48,
    height: 48,
    backgroundColor: "#98A4B4",
    borderRadius: 10,
    opacity: 0.5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  icon: {
    justifyContent: "center",
    marginTop: 12,
  },
  pageTitle: {
    fontSize: 28,
    color: "#020212",
  },
  test: {
    width: "100%",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#020212",
  },
  bodyContainer: {
    marginBottom: 280,
  },
  bodyHeader: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: "row",
  },
  brightLevel: {
    alignItems: "center",
  },
  switchButtons: {},
});

export default RoomScreen;
