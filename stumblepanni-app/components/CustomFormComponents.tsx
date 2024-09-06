import React, { useState, useEffect } from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Platform, Animated, ScrollView} from 'react-native';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'

interface BaseFieldProps {
    label: string;
    hint: string;
    isValid?: boolean;
}

interface TextFieldProps extends BaseFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

interface DateFieldProps {
    label: string;
    hint: string;
    value: Date;
    onChange: (date: Date) => void;
    isValid?: boolean;
}

interface DropdownFieldProps extends BaseFieldProps {
    value: string;
    onValueChange: (value: string) => void;
    items: { label: string; value: string }[];
}

const HintIcon: React.FC<{ hint: string }> = ({ hint }) => {
    const [isHintVisible, setHintVisible] = useState(false);
    const fadeAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isHintVisible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();

            timeout = setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start(() => setHintVisible(false));
            }, 1500); // Hide after 3 seconds
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [isHintVisible, fadeAnim]);

    return (
        <View style={styles.hintContainer}>
            <TouchableOpacity onPress={() => setHintVisible(true)}>
                <AntDesign
                    name="questioncircleo"
                    size={24}
                    color={Colors.pallete.mediumgrey}
                    style={styles.icon}
                />
            </TouchableOpacity>
            {isHintVisible && (
                <Animated.View style={[styles.hintText, { opacity: fadeAnim }]}>
                    <Text>{hint}</Text>
                </Animated.View>
            )}
        </View>
    );
};

export const TextField: React.FC<TextFieldProps> = ({ label, hint, isValid = true, value, onChangeText, keyboardType = 'default' }) => (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, !isValid && styles.inputError]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={label}
            />
            <HintIcon hint={hint} />
        </View>
    </View>
);

export const DateField: React.FC<DateFieldProps> = ({ label, hint, value, onChange, isValid = true }) => {
    const [show, setShow] = useState(false);

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || value;
        setShow(Platform.OS === 'ios');
        onChange(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const initialDate = new Date('1000-01-01');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !isValid && styles.inputError, value.toDateString() === initialDate.toDateString() && {color: Colors.pallete.mediumgrey}]}
                    value={value.toDateString() === initialDate.toDateString() ? label : value.toLocaleDateString()}
                    placeholder={label}
                    editable={false}
                />
                <TouchableOpacity onPress={showDatepicker} style={styles.iconContainer}>
                    <AntDesign name="calendar" size={24} color={Colors.pallete.mediumgrey} />
                </TouchableOpacity>
                <HintIcon hint={hint} />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDate}
                    accentColor={Colors.pallete.accent}
                />
            )}
        </View>
    );
};

export const DropdownField: React.FC<DropdownFieldProps> = ({ label, hint, isValid = true, value, onValueChange, items }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const selectItem = (itemValue: string) => {
        onValueChange(itemValue);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !isValid && styles.inputError]}
                    value={value}
                    placeholder={label}
                    editable={false}
                />
                <TouchableOpacity onPress={toggleDropdown} style={styles.iconContainer}>
                    <AntDesign name="down" size={24} color={Colors.pallete.mediumgrey} />
                </TouchableOpacity>
                <HintIcon hint={hint} />
            </View>
            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    {items.map((item) => (
                        <TouchableOpacity key={item.value} onPress={() => selectItem(item.value)}>
                            <Text style={styles.dropdownItem}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
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
        color: Colors.pallete.black,
    },
    inputError: {
        borderColor: 'red',
    },
    icon: {
        marginLeft: 10,
    },
    iconContainer: {
        position: 'absolute',
        right: 40,
        padding: 10,
    },
    hintContainer: {
        position: 'relative',
        flexDirection: 'row',
    },
    hintText: {
        position: 'absolute',
        bottom:-40,
        right: 0,
        backgroundColor: Colors.pallete.white,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.pallete.mediumgrey,
        zIndex: 1000,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    dropdown: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        backgroundColor: Colors.pallete.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.pallete.mediumgrey,
        zIndex: 1,
        maxHeight: 200,
    },
    dropdownItem: {
        padding: 10,
        fontSize: 16,
    },
});