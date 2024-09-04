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
    Persona1: require("../../../assets/images/Characters_png/Sean.png"),
    PersonaLeft: require("../../../assets/images/Characters_png/Ronsi.png"),
    PersonaRight: require("../../../assets/images/Characters_png/manike.png"),
    Background: require("../../../assets/images/Onboarding/pexels-esrageziyor-45760220-11490144.jpg"),
  };
  
  const { width, height } = Dimensions.get("window");
  
  const PersonaIntro2 = () => {
    const handleTouch = () => {
      router.push("/part2/screen3");
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
                There are many of them and everyone knows their stuff. So Ask Away! 
              </Text>
              <Image
                source={assets.Persona1}
                resizeMode="contain"
                style={styles.persona1}
              />
              <Image
                source={assets.PersonaLeft}
                resizeMode="contain"
                style={styles.personaLeft}
              />
              <Image
                source={assets.PersonaRight}
                resizeMode="contain"
                style={styles.personaRight}
              />
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    );
  };
  
  export default PersonaIntro2;
  
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
      bottom: -70,
      width: width,
      height: height / 2,
    },
    personaLeft: {
      position: "absolute",
      bottom: 0,
      right: width * 0.35,
      width: width,
      height: height / 2,
      zIndex: 10,

    },
    personaRight: {
      position: "absolute",
      bottom: 0,
      left: width * 0.35,
      width: width,
      height: height / 2,
      zIndex: 10,

    },
    button: {
      borderWidth: 2,
      borderColor: Colors.pallete.white,
      backgroundColor: "transparent",
      paddingTop: 0,
      paddingBottom: 5,
    },
  });
  