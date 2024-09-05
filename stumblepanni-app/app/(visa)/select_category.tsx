import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from "@/constants/Colors";
import NextButton from "@/components/NextButton";
import { router } from "expo-router";

const VisaApplicationScreen: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextPress = () => {
        console.log('Selected category:', selectedOption);
        router.push("info_personal");
    };

    const isNextButtonDisabled = selectedOption === null;

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Apply for Your Visa</Text>
            <Text style={styles.subHeaderText}>Select Your ETA Category.</Text>

            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedOption === 'Single Entry Visa' && styles.selectedOptionButton,
                    ]}
                    onPress={() => handleOptionSelect('Single Entry Visa')}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedOption === 'Single Entry Visa' && styles.selectedOptionText,
                        ]}
                    >
                        Single Entry Visa
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedOption === 'Double Entry Visa' && styles.selectedOptionButton,
                    ]}
                    onPress={() => handleOptionSelect('Double Entry Visa')}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedOption === 'Double Entry Visa' && styles.selectedOptionText,
                        ]}
                    >
                        Double Entry Visa
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedOption === 'Multiple Entry Visa' && styles.selectedOptionButton,
                    ]}
                    onPress={() => handleOptionSelect('Multiple Entry Visa')}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedOption === 'Multiple Entry Visa' && styles.selectedOptionText,
                        ]}
                    >
                        Multiple Entry Visa
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <NextButton
                    disabled={isNextButtonDisabled}
                    onPress={handleNextPress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pallete.white,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    headerText: {
        fontSize: 32,
        marginBottom: 35,
        fontFamily: "JosefinSansMedium",
    },
    subHeaderText: {
        fontSize: 25,
        color: '#333333',
        marginBottom: 40,
        fontFamily: "LatoRegular",
    },
    optionsContainer: {
        backgroundColor: Colors.pallete.extralightgrey,
        borderRadius: 30,
        padding: 40,
        alignItems: 'center',
    },
    optionButton: {
        width: '100%',
        paddingVertical: 18,
        backgroundColor: Colors.pallete.extralightgrey,
        borderColor: Colors.pallete.mediumgrey,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        height: 60,
        alignItems: 'center',
    },
    selectedOptionButton: {
        backgroundColor: "#5a9496",
    },
    optionText: {
        fontSize: 20,
        color: '#333333',
        fontFamily: "LatoRegular",
    },
    selectedOptionText: {
        color: Colors.pallete.white,
    },
    button: {
        alignItems: 'center',
        marginTop: 120,
    }
});

export default VisaApplicationScreen;