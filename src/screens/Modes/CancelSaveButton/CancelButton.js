import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function CancelButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchableButton}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center"
  },
  touchableButton: {
    width: 100,
    height: 40,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FF6953",
    alignItems: "center",
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
});

export default CancelButton;
