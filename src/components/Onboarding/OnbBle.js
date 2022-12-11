import React from "react";
import { Text, View } from "react-native";
import { object, string, element } from "prop-types";

const OnbBle = ({ styles, header, description, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.bottomNavigation}>{children}</View>
    </View>
  );
};

OnbBle.propTypes = {
  styles: object,
  header: string,
  description: string,
  children: element,
};

export default OnbBle;
