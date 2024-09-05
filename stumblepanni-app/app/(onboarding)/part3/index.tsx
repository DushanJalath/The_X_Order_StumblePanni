import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  Background: require("../../../assets/images/Onboarding/pexels-alexazabache-3250362.jpg"),
};

const { width, height } = Dimensions.get("window");

const Feature1 = () => {
  const handleTouch = () => {
    router.push("/part3/screen1");
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
                    <LinearGradient
            colors={["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.9)"]}
            style={styles.gradient}
          >
          <View style={styles.textView}>
            <Text style={styles.text}>
            Let’s discover the incredible adventures awaiting you in Sri Lanka and elevate your journey with StumblePanni.
            </Text>
          </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default Feature1;

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
    color: Colors.pallete.white,
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
  gradient: {
    flex:1,
  }
});