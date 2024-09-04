import {Stack} from "expo-router";
import {StatusBar} from "react-native";

export default function LoginLayout() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#ffffff"
                hidden={false}
            />
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="signup" options={{headerShown: false}}/>
            </Stack>
        </>

    );
}
