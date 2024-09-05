import { StyleSheet, Text, View } from "react-native";
import React from "react";

const maintenance = () => {
  return (
    <View style={styles.container}>
      <Text>Oops! This screen is under maintenance.</Text>
    </View>
  );
};

export default maintenance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
