import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter, Slot } from "expo-router";
import {
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import { CommonStyles } from "@/constants/CommonStyles";

const assets = {
  LogoMain: require("../../../assets/images/Logo/logo-name.png"),
  Background: require("../../../assets/images/Skyline/Ella.jpg"),
};

export default function OnboadingPart1Layout() {
  const router = useRouter();

  const navigateToHome = () => {
    router.replace("/"); // This will navigate to the root app/index
  };

  const navigateBack = () => {
    router.back(); // This will navigate back to the previous route
  };

  return (
    <ImageBackground
      source={assets.Background}
      style={CommonStyles.containerBackgroundImage}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        hidden={true}
      />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="subtitle" />
      </Stack>
    </ImageBackground>
  );
}
