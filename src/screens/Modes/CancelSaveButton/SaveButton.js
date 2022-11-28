import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function SaveButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchableButton}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  touchableButton: {
    width: 100,
    height: 40,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#57E7CB",
    alignItems: "center",
    borderRadius: 20
  },

  buttonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  },
});

export default SaveButton;
