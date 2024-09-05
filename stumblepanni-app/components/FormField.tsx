import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

interface FormFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    isValid?: boolean; // Make isValid optional
    hint: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const FormField: React.FC<FormFieldProps> = ({ value, onChangeText, placeholder, isValid = true, hint, keyboardType = 'default' }) => {
    const [isHintVisible, setHintVisible] = useState(false);

    const toggleHintVisibility = () => {
        setHintVisible(!isHintVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !isValid && styles.inputError]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
                <TouchableOpacity onPress={toggleHintVisibility}>
                    <AntDesign
                        name="questioncircleo"
                        size={24}
                        color={Colors.pallete.mediumgrey}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            {isHintVisible && <Text style={styles.hintText}>{hint}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: Colors.pallete.extralightgrey,
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        borderColor: Colors.pallete.mediumgrey,
        borderWidth: 1,
        height: 48,
    },
    inputError: {
        borderColor: 'red',
    },
    icon: {
        marginLeft: 10,
    },
    hintText: {
        marginTop: 5,
        color: Colors.pallete.mediumgrey,
        fontSize: 14,
    },
});

export default FormField;