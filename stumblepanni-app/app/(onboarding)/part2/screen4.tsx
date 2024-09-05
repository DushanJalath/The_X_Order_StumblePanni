import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  Persona1: require("../../../assets/images/Characters_png/Maya.png"),
  Background: require("../../../assets/images/Onboarding/pexels-esrageziyor-45760220-11490144.jpg"),
};

const { width, height } = Dimensions.get("window");

const PersonaIntro4 = () => {
  const handleTouch = () => {
    router.push("/part2/screen5");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.Background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback
          onPress={handleTouch}
          style={CommonStyles.centeredContent}
        >
          <View style={styles.textView}>
            <Text style={styles.text}>
            Meet Maya, The collective consciousness of Sri Lanka. The embodiment of the paradise.. 
            </Text>
            <Image
              source={assets.Persona1}
              resizeMode="contain"
              style={styles.persona1}
            />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default PersonaIntro4;

const styles = StyleSheet.create({
  content: {},
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
  },
  textView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "8%",
  },
  text: {
    fontSize: 32,
    color: Colors.pallete.black,
    textAlign: "left",
    fontFamily: "JosefinSansLight",
    padding: "10%",
  },
  backgroundImage: {
    width: width, // Full screen width
    height: height, // Full screen height
    position: "absolute",
    bottom: 0,
  },
  container: {
    flex: 1,
  },
  persona1: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height / 2,
    zIndex: 10,
  },
});
