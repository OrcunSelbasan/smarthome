import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useDispatch } from "react-redux";
import { setLoggedOut } from "../../../features/loginSlice";

export default function ProfileIcon({ username, style }) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  function logout() {
    signOut(auth)
      .then(() => {
        dispatch(setLoggedOut());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <Text
        onPress={() => setShowOptions((prevState) => !prevState)}
        style={[style.username]}
      >
        {username[0].toUpperCase()}
      </Text>
      {showOptions && (
        <TouchableHighlight
          underlayColor="none"
          onPress={() => {
            showAlert(logout);
          }}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableHighlight>
      )}
    </View>
  );
}

const showAlert = (fn) =>
  Alert.alert("Log out", "Are you sure?", [
    {
      text: "Cancel",
      style: "cancel",
    },
    { text: "OK, Log out", onPress: () => fn()},
  ]);

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 20,
    marginLeft: 5,
  },
  logoutText: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    color: "red",
    width: 100,
    fontSize: 24,
    paddingStart: 5,
  },
});
