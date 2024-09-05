import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { PiAirplaneTiltLight } from "react-icons/pi";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from "expo-linear-gradient";

import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  Background: require("../../../assets/images/Onboarding/pexels-marina-akimova-2143804-3845057.jpg"),
};

const { width, height } = Dimensions.get("window");

const Feature2 = () => {
  const handleTouch = () => {
    router.push("/part3/screen2");
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
                Get your visa hassle-free! StumblePanni handles your visa
                application and approval—all in one place
              </Text>
              {/* <PiAirplaneTiltLight style={styles.icon} /> */}
              <MaterialCommunityIcons name="airplane" style={styles.icon}/>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default Feature2;

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
    fontSize: 50,
    color: Colors.pallete.white,
  },
  gradient: {
    flex: 1,
  },
});
