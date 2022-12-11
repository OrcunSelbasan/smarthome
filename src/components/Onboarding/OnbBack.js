import { StyleSheet, Text, TouchableOpacity } from "react-native";

const OnbBack = ({ ...props }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => props.onPageChange(props.pageIndex, "prev")}
    {...props}
  >
    <Text style={styles.buttonText}>Back</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: -350,
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderStyle: "solid",
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default OnbBack;
