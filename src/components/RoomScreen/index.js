import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomDropdown from "../CustomDropdown";
import CustomBrightnessSlider from "../CustomBrightnessSlider";
import CustomSwitchButton from "../CustomSwitchButton";

const RoomScreen = ({ username, bleStatus, img, title, setIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.roomScreen}>
        <View style={styles.headerComposite}>
          <View style={styles.usernameCircle}>
            <Text style={styles.username}> {username}</Text>
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
      <View style={styles.test}>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyHeader}>
            <View style={styles.dropdown}>
              <CustomDropdown />
            </View>
            <Image style={styles.settingsIcon} source={setIcon}></Image>
          </View>
          <View style={styles.brightLevel}>
            <CustomBrightnessSlider />
          </View>
          <View style={styles.switchButtons}>
            <CustomSwitchButton buttonName="Power" />
            <CustomSwitchButton buttonName="Smart Light Mode" />
            <CustomSwitchButton buttonName="Sunlight Effect" />
          </View>
        </View>
      </View>
    </View>
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
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {
    color: "#D9D6D9",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
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
    alignItems: "center"
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
  settingsIcon: {
    marginTop: 30,
    marginLeft: 120,
  },
  brightLevel: {
    alignItems: "center",
  },
  switchButtons: {},
});

export default RoomScreen;
