import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  LogoMain: require("../../../assets/images/Logo/logo-name.png"),
  Background: require("../../../assets/images/Anime_scenery/Anime_A_panoramic_landscape_of_Sri_Lankas_diverse_scenery_incl_0.jpg"),
};

const Subtitle = () => {
  const handleTouch = () => {
    router.push("/part2");
  };
  return (
      <ImageBackground
        source={assets.Background}
        style={CommonStyles.containerBackgroundImage}
      >
        <TouchableWithoutFeedback
          onPress={handleTouch}
          style={CommonStyles.centeredContent}
        >
          <View style={styles.textView}>
            <Text style={styles.text}>
              This is your ultimate travel companion for unforgettable
              experiences!
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  content: {},
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    color: Colors.pallete.white,
    textAlign: "left",
    fontFamily: "JosefinSansLight",
    textShadowColor: Colors.pallete.black,
    textShadowRadius: 5,
    padding: "10%",
  },
});
