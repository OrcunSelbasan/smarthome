import { StyleSheet, Text, TouchableOpacity } from "react-native";

const OnbNext = ({ ...props }) => (
  <TouchableOpacity
    style={styles.button}
    {...props}
    onPress={() => props.onPageChange(props.pageIndex, "next")}
  >
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: -350,
    right: 0,
    marginHorizontal: 10,
    backgroundColor: "#403FFC",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderStyle: "solid",
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default OnbNext;
