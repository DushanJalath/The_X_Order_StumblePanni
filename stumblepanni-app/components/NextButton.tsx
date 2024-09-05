// stumblepanni-app/components/NextButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface NextButtonProps {
    disabled: boolean;
    onPress: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ disabled, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.nextButton, disabled && styles.nextButtonDisabled]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: Colors.pallete.accent,
        height: 52,
        paddingVertical: 6,
        borderRadius: 50,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        width: 250,
    },
    nextButtonDisabled: {
        backgroundColor: '#B2DFDB',
    },
    nextButtonText: {
        color: Colors.pallete.white,
        fontSize: 25,
        fontFamily: "JosefinSansMedium",
        textAlign: "center",
    },
});

export default NextButton;