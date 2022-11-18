import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ContinueWithButton from "../../components/ContinueWithButton";
import googlelogo from "../../../assets/images/googlelogo.png";
import microsoftlogo from "../../../assets/images/microsoftlogo.png";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../features/loginSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessageHeader, setErrorMessageHeader] = useState("");
  const [errorMessageBody, setErrorMessageBody] = useState("");
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

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setLoggedIn({ uid: user.uid, username: user.email }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsError(true);
        setErrorMessageBody(errorMessage);
        setErrorMessageHeader(errorCode);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headline}>Log In</Text>
        <View style={styles.loginBox}>
          <CustomInput onInput={handleEmail} placeholder="Username" />
          <CustomInput
            onInput={handlePassword}
            secureTextEntry={true}
            placeholder="Password"
          />
          <CustomButton onPress={() => login()} text="Log in" />
        </View>
        <View style={styles.continueWithBox}>
          <ContinueWithButton img={googlelogo} text="Continue with Google" />
          <ContinueWithButton
            img={microsoftlogo}
            text="Continue with Microsoft"
          />
        </View>
        <ErrorModal
          onClose={handleCloseModal}
          isError={isError}
          errorMessageBody={errorMessageBody}
          errorMessageHeader={errorMessageHeader}
        />
      </View>
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
