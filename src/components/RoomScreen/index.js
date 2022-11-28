import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import CustomDropdown from "../CustomDropdown";
import CustomBrightnessSlider from "../CustomBrightnessSlider";
import CustomSwitchButton from "../CustomSwitchButton";
import RoomSettings from "../RoomSettings";
import HumidityLevel from "../HumidityLevel";
import Loading from "../ActivityIndicator";
import DataKeeper from "../DataKeeper";
import ProfileIcon from "../ProfileIcon";
import LightColorPicker from "../LightColorPicker";

const RoomScreen = ({ username, bleStatus, img, title, setIcon, colors, ...props }) => {
  const data = props.functionalities;
  const dropdownData = data?.modes?.map((data, i) => ({
    label: data.name,
    value: i + 1,
  }));

  return data ? (
    <View style={styles.container}>
      <View style={styles.roomScreen}>
        <View style={styles.headerComposite}>
          <View style={styles.usernameCircle}>
            <ProfileIcon username={username} style={{username: styles.username}} />
          </View>
          <View style={styles.bleBar}>
            <Text style={styles.bleText}>{bleStatus}</Text>
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ borderTopStartRadius: 25, borderTopEndRadius: 25 }}>
        <View style={styles.test}>
          <View style={styles.bodyContainer}>
            <View style={styles.bodyHeader}>
              <View style={styles.dropdown}>
                <CustomDropdown modes={dropdownData} />
              </View>
              <RoomSettings {...props} setIcon={setIcon} />
            </View>
            {data?.colorSelect && <LightColorPicker isOnRoom={true} colors={colors} />}
            <BrightnessComponent condition={data?.brightnessSelect}>
              <CustomBrightnessSlider />
            </BrightnessComponent>
            <View style={styles.switchButtons}>
              <SwitchComponent
                name="Power"
                condition={data?.power || data?.powerSelect}
              />
              <SwitchComponent
                name="Smart Light Mode"
                condition={data?.smartSelect}
              />
              <SwitchComponent
                name="Sunlight Effect"
                condition={data?.sunlightSelect || data?.sunlight}
              />
              <SwitchComponent
                name="Window"
                condition={data?.window || data?.windowSelect}
              />
              <SwitchComponent
                name="Air Humidifier"
                condition={data?.humidifierSelect}
              />
            </View>
            <BrightnessComponent condition={data?.humidifierAdjustmentSelect}>
              <HumidityLevel />
            </BrightnessComponent>
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

const SwitchComponent = ({ name, condition }) => {
  return (
    condition && (
      <CustomSwitchButton
        onSwitchChange={() => {}}
        fontSize={24}
        marginLeft={20}
        buttonName={name}
      />
    )
  );
};

const BrightnessComponent = (props) => {
  return (
    props.condition && <View style={styles.brightLevel}>{props.children}</View>
  );
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
    width: 114,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    marginLeft: 180,
  },
  bleText: {
    color: "#D9D6D9",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 5,
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
