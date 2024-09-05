import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";

const assets = {
  LogoMain: require("../../../assets/images/Logo/logo-name.png"),
  Background: require("../../../assets/images/Skyline/Ella.jpg"),
};

const Begin = () => {
  const handleTouch = () => {
    router.push("/part1/subtitle");
  };

  const { height, width } = Dimensions.get("window");
  const logoWidth = width * 0.8;
  const dynamicStyles = StyleSheet.create({
    logo: {
      width: logoWidth,
      height: height,
    },
  });

  return (
    <ImageBackground
      source={assets.Background}
      style={CommonStyles.containerBackgroundImage}
    >
      <TouchableWithoutFeedback
        onPress={handleTouch}
        style={CommonStyles.centeredContent}
      >
        <View style={CommonStyles.centeredContent}>
          <Image
            source={assets.LogoMain}
            style={StyleSheet.flatten([dynamicStyles.logo, styles.logo])}
          />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Begin;

const styles = StyleSheet.create({
  content: {},
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
  },
});
