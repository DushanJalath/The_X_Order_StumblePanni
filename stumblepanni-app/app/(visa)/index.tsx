import ExpandableCard from "@/components/ExpandableCard";
import { Colors } from "@/constants/Colors";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import {VisaInstruction} from "@/constants/VisaInstruction";


export default function VisaScreen() {
	const handleGetStarted = () => {
		console.log("Start");
	};

	const handleTrackYourVisa = () => {
		console.log("Track");
	};

	return (
		<View style={styles.background}>
			<Text style={styles.text}>
				What Should You Know When Applying for a Visa ?
			</Text>

			<ScrollView contentContainerStyle={styles.scroll_container}>
				<ExpandableCard
					title="Visa Categories and fees"
					content={VisaInstruction.ins_one}
					height={450}
				/>
				<ExpandableCard
					title="Visa extension process"
					content={VisaInstruction.ins_two}
					height={400}
				/>
				<ExpandableCard
					title="Required Documents"
					content={VisaInstruction.ins_three}
					height={220}
				/>
				<ExpandableCard
					title="Process After Visa Approval"
					content={VisaInstruction.ins_four}
					height={230}
				/>
			</ScrollView>

			<View style={styles.btn_container}>
				<CustomButton
					width={250}
					title="Get Started"
					onPress={handleGetStarted}
				/>
				<CustomButton
					width={250}
					title="Track Your Visa"
					onPress={handleTrackYourVisa}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: Colors.pallete.white,
	},
	text: {
		color: Colors.pallete.black,
		fontSize: 28,
		marginBottom: 40,
		marginLeft: 16,
		fontFamily: "JosefinSansMedium",
	},
	scroll_container: {
		flexGrow: 1,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: Colors.pallete.white,
	},
	btn_container: {
		marginTop: 20,
		alignItems: "center",
		marginBottom: 30,
	},
});
