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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const assets = {
  LogoMain: require("../../../assets/images/Logo/logo-name.png"),
  Background: require("../../../assets/images/Anime_scenery/Anime_A_panoramic_landscape_of_Sri_Lankas_diverse_scenery_incl_0.jpg"),
};

const Begin = () => {
  const handleTouch = () => {
    router.push("/onboarding/part1/subtitle");
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
    <View style={CommonStyles.centeredContent}>
      <TouchableWithoutFeedback
        onPress={handleTouch}
        style={CommonStyles.centeredContent}
      >
        <ImageBackground
          source={assets.Background}
          style={CommonStyles.containerBackgroundImage}
        >
          <View style={CommonStyles.centeredContent}>
            <Image
              source={assets.LogoMain}
              style={StyleSheet.flatten([dynamicStyles.logo, styles.logo])}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
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
