import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { MdCatchingPokemon } from "react-icons/md";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  Background: require("../../../assets/images/Onboarding/pexels-namal-siriwardana-162265496-26923471.jpg"),
};

const { width, height } = Dimensions.get("window");

const Feature3 = () => {
  const handleTouch = () => {
    router.push("/part4");
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
                Feeling adventurous? Step into a world of quests where every
                path leads to a new thrill.
              </Text>
              <Text style={styles.text}>
                Collect virtual souvenirs as you conquer challenges and unlock
                hidden treasures.
              </Text>
              <Text style={styles.text}>Ready to make some epic memories?</Text>
              <MaterialIcons name="catching-pokemon" style={styles.icon} />
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
    paddingHorizontal: 30,
    paddingVertical: "4%",
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
