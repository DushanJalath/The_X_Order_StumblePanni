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
  Persona1: require("../../../assets/images/Characters_png/Muslim.png"),
  PersonaLeft: require("../../../assets/images/Characters_png/joris.png"),
  PersonaRight: require("../../../assets/images/Characters_png/Mitra.png"),
  Background: require("../../../assets/images/Onboarding/pexels-esrageziyor-45760220-11490144.jpg"),
};

const { width, height } = Dimensions.get("window");

const PersonaIntro = () => {
  const handleTouch = () => {
    router.push("/onboarding/part2/screen4");
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
              And there is someone truly special to look after you in your
              journeys..
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

export default PersonaIntro;

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
    textAlign: "center",
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
  personaLeft: {
    position: "absolute",
    bottom: -60,
    right: width * 0.35,
    width: width,
    height: height / 2,
  },
  personaRight: {
    position: "absolute",
    bottom: -60,
    left: width * 0.35,
    width: width,
    height: height / 2,
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.pallete.white,
    backgroundColor: "transparent",
    paddingTop: 0,
    paddingBottom: 5,
  },
});
