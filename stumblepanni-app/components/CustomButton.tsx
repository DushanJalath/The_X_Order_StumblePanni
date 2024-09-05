import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const CustomButton = ({ width, title, onPress }: { width: number; title: string; onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { width }]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
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
    },
    buttonText: {
        color: Colors.pallete.white,
        fontSize: 25,
        fontFamily: "JosefinSansMedium",
        textAlign: "center",
    },
});

export default CustomButton;