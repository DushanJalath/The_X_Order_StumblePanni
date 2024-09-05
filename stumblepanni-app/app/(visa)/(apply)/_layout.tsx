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
                <Stack.Screen name="select_category" />
                <Stack.Screen name="info_personal" />
                <Stack.Screen name="info_contact" />
                <Stack.Screen name="info_travel" />
                <Stack.Screen name="documents" />
                <Stack.Screen name="review" />
            </Stack>
        </>
    );
}
