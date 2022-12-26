import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AddingBoard from "../../components/AddingBoard";
import NameInput from "../../components/NameInput";

const initialState = {
  mode: "Cinemode",
  selectedRoom: "bedroom",
  rooms: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE_NAME": {
      return {
        ...state,
        mode: action.payload,
      };
    }
    case "CHANGE_ROOM": {
      return {
        ...state,
        selectedRoom: action.payload,
      };
    }
    case "SET_ROOMS": {
      return {
        ...state,
        rooms: action.payload,
      };
    }
  }
};

const AddMode = () => {
  const userCredential = useSelector((state) => state.login);
  const [state, localDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localDispatch({type: "SET_ROOMS", payload: userCredential.rooms});
  }, [])
  return (
    <View style={styles.container}>
      <NameInput placeholder="Cinemode" />
      <AddingBoard
        onRoomChange={(value) =>
          localDispatch({ type: "CHANGE_ROOM", payload: value })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default AddMode;
