import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { LuSnowflake } from "react-icons/lu";
import { LinearGradient } from "expo-linear-gradient";

import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  Background: require("../../../assets/images/Onboarding/pexels-kavindra-yasas-175608-10663415.jpg"),
};

const { width, height } = Dimensions.get("window");

const Feature3 = () => {
  const handleTouch = () => {
    router.push("/onboarding/part3/screen3");
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
            colors={["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 1)"]}
            style={styles.gradient}
          >
            <View style={styles.textView}>
              <Text style={styles.text}>
                Did you know King Ravana once ruled these lands? Dive into tales
                like his and unravel the mysteries of Sri Lanka’s rich history
                and culture
              </Text>
              <LuSnowflake style={styles.icon} />
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default Feature3;

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
  icon: {
    fontSize: 86,
    color: Colors.pallete.white,
  },
  gradient: {
    flex: 1,
  },
});
