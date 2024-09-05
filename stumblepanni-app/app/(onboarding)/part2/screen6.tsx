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
import AccentButton from "@/components/AccentButton";

const assets = {
  Persona: require("../../../assets/images/Characters_png/Maya_glow_cropped.png"),
  Background: require("../../../assets/images/Onboarding/pexels-esrageziyor-45760220-11490144.jpg"),
};

const { width, height } = Dimensions.get("window");

const PersonaIntro = () => {
  const handleTouch = () => {
      router.push("/part3");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.Background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback
          style={CommonStyles.centeredContent}
        >
          <View style={styles.textView}>
            <Text style={styles.text}>So, Shall We Continue ?</Text>
            <AccentButton
              title="Let's Go!"
              onPress={handleTouch}
              textStyle={styles.button}
            ></AccentButton>
            <Image
              source={assets.Persona}
              resizeMode="cover"
              style={styles.persona}
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
    marginBottom: 0,
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
  persona: {
    position: "absolute",
    bottom: 0,
    width: width * 1.02,
    height: height / 1.7,
    zIndex: 10,
  },
  button: {
    paddingHorizontal: 50,
  },
});
