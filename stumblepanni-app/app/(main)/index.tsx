import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

const Index = () => {
	const router = useRouter();

	const navigateToVisa = () => {
		router.push("/(visa)");
	};

	const navigateToLogin = () => {
		router.push("/(login)");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.login} onPress={navigateToLogin}>
				<Text style={styles.buttonText}>Go to Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={navigateToVisa}>
				<Text style={styles.buttonText}>Go to Visa</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#008080", // Teal color
		paddingHorizontal: 50,
		paddingVertical: 20,
		borderRadius: 10, // Rounded corners
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	login: {
		backgroundColor: "#f4511e", // Teal color
		paddingHorizontal: 50,
		paddingVertical: 20,
		borderRadius: 10, // Rounded corners
		marginBottom: 20,
	},
});

export default Index;
