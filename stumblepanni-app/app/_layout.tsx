import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		JosefinSansExtraLight: require("../assets/fonts/JosefinSans-ExtraLight.ttf"),
		JosefinSansLight: require("../assets/fonts/JosefinSans-Light.ttf"),
		JosefinSansRegular: require("../assets/fonts/JosefinSans-Regular.ttf"),
		JosefinSansBold: require("../assets/fonts/JosefinSans-Bold.ttf"),
		JosefinSansSemiBold: require("../assets/fonts/JosefinSans-SemiBold.ttf"),
		JosefinSansThin: require("../assets/fonts/JosefinSans-Thin.ttf"),
		JosefinSansMedium: require("../assets/fonts/JosefinSans-Medium.ttf"),
		LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
		LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider
			value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<Stack screenOptions={{ headerShown: false ,animation: "slide_from_right"}}>
				<Stack.Screen name="index" />
				<Stack.Screen name="(login)" options={{ headerShown: false }} />
				<Stack.Screen name="mainmenu" />
				<Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
				<Stack.Screen name="(visa)" />
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}
