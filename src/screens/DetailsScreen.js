import React from "react";
import {
  ScrollView,
  Text,
  Button,
} from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </ScrollView>
  );
}

export default DetailsScreen;