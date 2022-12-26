import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
// import ContinueWithButton from "../../components/ContinueWithButton";
// import googlelogo from "../../../assets/images/googlelogo.png";
// import microsoftlogo from "../../../assets/images/microsoftlogo.png";
import { useDispatch } from "react-redux";
import { setIpAddress, setLoggedIn } from "../../../features/loginSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useState } from "react";
import ErrorModal from "./ErrorModal";
import Loading from "../../components/ActivityIndicator";
import { getRooms, postRooms } from "../../api/controllers/roomController";
import { setRooms } from "../../../features/loginSlice";
import Room from "../../api/models/room";

const SignInScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessageHeader, setErrorMessageHeader] = useState("");
  const [errorMessageBody, setErrorMessageBody] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Trying to log in...");
  const [ip, setIp] = useState("");
  const dispatch = useDispatch();

  function handlePassword(input) {
    setPassword(input);
  }

  function handleEmail(input) {
    setEmail(input);
  }

  function handleCloseModal() {
    setIsError(false);
  }

  function handleIP(value) {
    value = value.replaceAll(",", ".")
    setIp(value);
  }

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

  function login() {
    dispatch(setIpAddress(ip));
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setLoggedIn({ uid: user.uid, username: user.email }));
        return user;
      })
      .then((user) => {
        return fetchRoomsOfUser(user);
      })
      .then((rooms) => {
        dispatch(setRooms({ ...rooms }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        setIsError(true);
        setErrorMessageBody(errorMessage);
        setErrorMessageHeader(errorCode);
      });
  }

  async function fetchRoomsOfUser(user) {
    return await getRooms(user.uid)
      .then((rooms) => {
        if (rooms.success) {
          return rooms;
        } else {
          const livingroom = new Room().toObject();
          const bedroom = new Room().toObject();
          postRooms(rooms.uid, { livingroom, bedroom, password: "0000" });
          return { livingroom, bedroom, password: "0000" };
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading message={loadingMessage} />
      ) : (
        <View style={styles.innerContainer}>
          <Text style={styles.headline}>Log In</Text>
          <View style={styles.loginBox}>
            <CustomInput onInput={handleEmail} placeholder="Username" />
            <CustomInput
              onInput={handlePassword}
              secureTextEntry={true}
              placeholder="Password"
            />
            <CustomInput kbType={"decimal-pad"} onInput={handleIP} placeholder="IP Address" />
            <CustomButton
              onPress={() => (validateIPaddress(ip) ? login() : () => {})}
              text="Log in"
            />
          </View>
          <View style={styles.continueWithBox}>
            {/* <ContinueWithButton img={googlelogo} text="Continue with Google" />
            <ContinueWithButton
              img={microsoftlogo}
              text="Continue with Microsoft"
            /> */}
          </View>
          <ErrorModal
            onClose={handleCloseModal}
            isError={isError}
            errorMessageBody={errorMessageBody}
            errorMessageHeader={errorMessageHeader}
          />
        </View>
      )}
    </View> // end of the container
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#020212",
    paddingTop: 50,
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: "#020212",
    paddingTop: 50,
  },
  headline: {
    color: "#D9D6D9",
    fontWeight: "bold",
    fontSize: 34,
  },
  loginBox: {
    paddingVertical: 60,
  },
  continueWithBox: {
    paddingBottom: 30,
  },
});

export default SignInScreen;
