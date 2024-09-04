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
  Background: require("../../../assets/images/Onboarding/pexels-esrageziyor-45760220-11490144.jpg"),
};

const PersonaIntro = () => {
  const handleTouch = () => {
    router.push("/onboarding/part3");
  };
  return (
    <ImageBackground source={assets.Background} style={styles.backgroundImage}>
      <TouchableWithoutFeedback
        onPress={handleTouch}
        style={CommonStyles.centeredContent}
      >
        <View style={styles.textView}>
          <Text style={styles.text}>Part2</Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default PersonaIntro;

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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
