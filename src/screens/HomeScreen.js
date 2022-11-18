import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Counter } from "../components/Counter";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome</Text>
        <Counter />
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

export default HomeScreen;