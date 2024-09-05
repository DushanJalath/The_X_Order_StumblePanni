import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	LayoutAnimation,
	Platform,
	UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import WebView from "react-native-webview";

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

interface ExpandableCardProps {
	title: string;
	content: string;
	height?: number;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, content,height }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setExpanded(!expanded);
	};

	return (
		<View style={styles.cardContainer}>
			<TouchableOpacity onPress={toggleExpand} style={styles.touchableArea}>
				<LinearGradient
					colors={[Colors.pallete.accent, "#72bbbd", Colors.pallete.accent]}
					style={styles.cardHeader}
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
				>
					<Text style={styles.cardTitle}>{title}</Text>
					<Ionicons
						name={expanded ? "chevron-up" : "chevron-down"}
						size={24}
						color="white"
					/>
				</LinearGradient>
			</TouchableOpacity>
			<View style={[styles.cardContent, { height: expanded ? height : 0 }]}>
				<WebView
					style={styles.webViewContent}
					originWhitelist={['*']}
					source={{ html: content }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		marginVertical: 18,
		overflow: "hidden",
		backgroundColor: Colors.pallete.accent,
		borderRadius: 10,
	},
	touchableArea: {
		borderRadius: 10,
		overflow: 'hidden',
	},
	cardHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 15,
		paddingRight: 15,
		height: 40,
		borderRadius: 10
	},
	cardTitle: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		fontFamily: "SpaceMono",
	},
	cardContent: {
		overflow: 'hidden',
		backgroundColor: Colors.pallete.extralightgrey,
		flexGrow: 1,
	},
	webViewContent: {
		flex: 1,
		backgroundColor: Colors.pallete.extralightgrey,
		marginTop:10
	},
});

export default ExpandableCard;