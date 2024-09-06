import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    containerBackgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    centeredContent: {    // ! DO Not put alignItems: "center" here, it will mess up the layout
    width: "100%",
    maxWidth: 600,
    },
});