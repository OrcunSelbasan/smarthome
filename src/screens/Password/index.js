import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput as TI,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  toggleLoginPassword,
  togglePassword,
} from "../../api/controllers/roomActions";

export default function Password() {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [oldP, setOldP] = useState();
  const [newP, setNewP] = useState();
  const [newPA, setNewPA] = useState();
  const [loginP, setLoginP] = useState();

  const ip = useSelector((state) => state.login.ipAddress);

  function reset() {
    setNewPA("");
    setOldP("");
    setLoginP("");
    setNewP("");
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TI
              onChangeText={(val) => setLoginP(val)}
              maxLength={6}
              style={{ marginVertical: 20, padding: 15, fontSize: 20 }}
              placeholderTextColor="gray"
              placeholder="Password"
              keyboardType="number-pad"
              secureTextEntry={true}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                toggleLoginPassword(
                  "http://" + ip + ":52170" + "/door",
                  parseInt(loginP),
                  true
                );
                console.log(
                  "Request send open the door",
                  typeof parseInt(loginP),
                  loginP
                );
                reset();
                return setModalVisible1(!modalVisible1);
              }}
            >
              <Text style={styles.textStyle}>Open</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible1(false);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible1(true)}
      >
        <Text style={styles.textStyle}>Open The Lock</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TI
              onChangeText={(val) => setLoginP(val)}
              maxLength={6}
              style={{ marginVertical: 20, padding: 15, fontSize: 20 }}
              placeholderTextColor="gray"
              placeholder="Password"
              keyboardType="number-pad"
              secureTextEntry={true}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                toggleLoginPassword(
                  "http://" + ip + ":52170" + "/door",
                  parseInt(loginP),
                  false
                );
                console.log(
                  "Request send to lock the door",
                  typeof parseInt(loginP),
                  loginP
                );
                reset();
                return setModalVisible2(!modalVisible2);
              }}
            >
              <Text style={styles.textStyle}>Lock</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible2(false);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[
          styles.button,
          styles.buttonOpen,
          { backgroundColor: "#FF6953" },
        ]}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.textStyle}>Lock The Door</Text>
      </Pressable>

      <Text style={styles.pageTitle}>Door Password Change</Text>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            label="Old Password"
            maxLength={6}
            keyboardType="number-pad"
            value={oldP}
            onChangeText={(val) => setOldP(val)}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            label="New Password"
            maxLength={6}
            value={newP}
            keyboardType="number-pad"
            onChangeText={(val) => setNewP(val)}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            label="New Password Again"
            maxLength={6}
            value={newPA}
            keyboardType="number-pad"
            onChangeText={(val) => setNewPA(val)}
          />
        </TouchableWithoutFeedback>
        <Pressable
          style={[
            styles.button,
            styles.buttonOpen,
            { backgroundColor: "#5857F3", paddingVertical: 10 },
          ]}
          onPress={() => {
            if (newP === newPA && oldP !== newP) {
              togglePassword(
                "http://" + ip + ":52170" + "/password",
                parseInt(oldP),
                parseInt(newP)
              );
              console.log(
                "Request send to change the door password",
                typeof parseInt(oldP),
                oldP,
                typeof parseInt(newP),
                newP
              );
            } else {
              Alert.alert(
                "Error",
                "Passwords do not match! Also new password cannot be equal to old password.",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
              );
            }
            reset();
          }}
        >
          <Text style={styles.textStyle}>Save</Text>
        </Pressable>
        <View style={{ height: 150 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    paddingHorizontal: 50,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  pageTitle: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 10,
    color: "white",
  },
  input: {
    marginVertical: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 35,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#57E7CB",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 36,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
