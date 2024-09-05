import {Stack} from "expo-router";
import {StatusBar} from "react-native";

export default function LoginLayout() {
    return (
        <>
            <StatusBar
                barStyle="default"
                backgroundColor="transparent"
                hidden={false}
            />
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="part1/index" options={{headerShown: false}}/>
                <Stack.Screen name="part1/subtitle" options={{headerShown: false}}/>
                <Stack.Screen name="part2/index" options={{headerShown: false}}/>
                <Stack.Screen name="part2/screen1" options={{headerShown: false}}/>
                <Stack.Screen name="part2/screen2" options={{headerShown: false}}/>
                <Stack.Screen name="part2/screen3" options={{headerShown: false}}/>
                <Stack.Screen name="part2/screen4" options={{headerShown: false}}/>
                <Stack.Screen name="part2/screen5" options={{headerShown: false}}/>
                <Stack.Screen name="part2/screen6" options={{headerShown: false}}/>
                <Stack.Screen name="part3/index" options={{headerShown: false}}/>
                <Stack.Screen name="part4/index" options={{headerShown: false}}/>
            </Stack>
        </>

    );
}
