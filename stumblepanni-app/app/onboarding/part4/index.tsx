import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withDelay,
  runOnJS,
} from "react-native-reanimated";

import { CommonStyles } from "@/constants/CommonStyles";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { Colors } from "@/constants/Colors";

const assets = {
  Background: require("../../../assets/images/Onboarding/pexels-alexazabache-3250362.jpg"),
  Logo: require("../../../assets/images/Logo/logo.png"),
  LogoName: require("../../../assets/images/Logo/logo-name.png"),
};

const { width, height } = Dimensions.get("window");

const OnboardingClosure = () => {
  const [isTouchable, setIsTouchable] = useState(false); // Initially disable touch

  const handleTouch = () => {
    if (!isTouchable) return; // Do nothing if touch is disabled
    router.push("/mainmenu");
  };

  // ANIMATION
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const LogoOpacity = useSharedValue(1); 
  const LogoNameOpacity = useSharedValue(0);

  useEffect(() => {
    const delayDuration = 2000; 
    const opacityDelay = 2100;
    const animationDuration = 1000;
    const translateDuration = 2000;
    scale.value = withDelay(
      delayDuration,
      withTiming(0.3, { duration: animationDuration })
    );
    translateX.value = withDelay(
      delayDuration,
      withTiming(width, { duration: translateDuration })
    );
    translateY.value = withDelay(
      delayDuration,
      withTiming(0, { duration: animationDuration })
    );
    LogoOpacity.value = withDelay(
      opacityDelay,
      withTiming(0, { duration: animationDuration })
    );
    LogoNameOpacity.value = withDelay(delayDuration, withTiming(1, { duration: 1000 }, () => {
      // Enable touch after animation completes
      runOnJS(setIsTouchable)(true);
    }));
  }, []);

  // Animated styles for logo
  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      opacity: LogoOpacity.value,
    };
  });
  const animatedLogoNameStyle = useAnimatedStyle(() => {
    return {
      opacity: LogoNameOpacity.value,
    };
  });
  // END ANIMATION

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
            <View style={CommonStyles.container}>
              <Animated.Image
                source={assets.Logo}
                style={[styles.logo, animatedLogoStyle]}
                resizeMode="contain"
              />
              <Animated.Image
                source={assets.LogoName}
                style={[styles.logo, styles.logoName, animatedLogoNameStyle]}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default OnboardingClosure;

const styles = StyleSheet.create({
  content: {},
  logo: {
    position: "absolute",
  },
  logoName: {
    position: "absolute",

    width: width * 0.6,
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
