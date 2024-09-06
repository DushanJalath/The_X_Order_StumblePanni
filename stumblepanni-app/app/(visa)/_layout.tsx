import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Image, TouchableOpacity, StatusBar } from "react-native";

export default function VisaLayout() {
	const router = useRouter();

	const navigateToHome = () => {
		router.replace("/mainmenu");
	};

	const navigateBack = () => {
		router.back();
	};

	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="#ffffff"
				hidden={false}
			/>

			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: "#ffffff",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerRight: () => (
						<TouchableOpacity onPress={navigateToHome}>
							<Image
								source={require("../../assets/home-icon.png")}
								style={{
									width: 34,
									height: 45,
									marginRight: 9,
								}}
							/>
						</TouchableOpacity>
					),
					headerLeft: () => (
						<TouchableOpacity onPress={navigateBack}>
							<Ionicons
								name="chevron-back"
								size={30}
								color="#7f7f7f"
								style={{ marginLeft: -7 }}
							/>
						</TouchableOpacity>
					),
					headerShadowVisible: false,
					animation: "slide_from_right",
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="visa_process" />
				<Stack.Screen name="(apply)" options={{headerShown:false}} />
			</Stack>
		</>
	);
}
