import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform, Alert,
} from 'react-native';
import {router} from "expo-router";
import NextButton from "@/components/NextButton";
import {TextField} from '@/components/CustomFormComponents';
import {useLocalSearchParams} from "expo-router";
import {Colors} from "@/constants/Colors";

interface FormData {
    // previous fields
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    email: string;
    telephone: string;
    mobile: string;
    addressInSriLanka: string;
}

type FieldValidity = {
    [K in keyof FormData]: boolean;
};

const ContactInfoScreen: React.FC = () => {
    const { personalInfo, selectedCategory } = useLocalSearchParams();
    const parsedPersonalInfo = JSON.parse(personalInfo as string);

    const [formData, setFormData] = useState<FormData>({
        // previous fields
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        email: '',
        telephone: '',
        mobile: '',
        addressInSriLanka: '',
    });

    const [fieldValidity, setFieldValidity] = useState<FieldValidity>({
        // previous fields
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        country: true,
        zipCode: true,
        email: true,
        telephone: true,
        mobile: true,
        addressInSriLanka: true,
    });

    const handleInputChange = (name: keyof FormData, value: string | Date) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateFields = () => {
        const validations: FieldValidity = {
            // previous fields
            addressLine1: !!formData.addressLine1,
            addressLine2: true,
            city: /^[a-zA-Z\s]*$/.test(formData.city) && !!formData.city,
            state: /^[a-zA-Z\s]*$/.test(formData.state) && !!formData.state,
            country: /^[a-zA-Z\s]*$/.test(formData.country) && !!formData.country,
            zipCode:/^\d*$/.test(formData.zipCode),
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
            telephone: /^(\d{10})?$/.test(formData.telephone),
            mobile: /^\d{10}$/.test(formData.mobile),
            addressInSriLanka: /^[a-zA-Z0-9\s,'-]*$/.test(formData.addressInSriLanka),
        };

        setFieldValidity(validations);
        return Object.values(validations).every(Boolean);
    };

    const handleNextPress = () => {
        if (validateFields()) {
            router.push({
                pathname: "/info_travel",
                params: {
                    selectedCategory: selectedCategory,
                    personalInfo: JSON.stringify(parsedPersonalInfo),
                    contactInfo: JSON.stringify(formData)
                },
            });
            console.log('Contact Information:', formData);
            console.log(selectedCategory, parsedPersonalInfo);
        } else {
            // Alert.alert("Validation Error", "Please fill all fields correctly.");
            router.push({
                pathname: "/info_travel",
                params: {
                    selectedCategory: selectedCategory,
                    personalInfo: JSON.stringify(parsedPersonalInfo),
                    contactInfo: JSON.stringify(formData)
                },
            });
            console.log('Contact Information:', formData);
            console.log(selectedCategory, parsedPersonalInfo);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.headerText}>Apply for Your Visa</Text>
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Contact Information</Text>
            </View>

            <ScrollView contentContainerStyle={styles.stepsContainer}>
                {/* previous fields */}
                <TextField
                    label="Address Line 1 *"
                    hint="E.g., 123 Main St"
                    value={formData.addressLine1}
                    onChangeText={(text) => handleInputChange('addressLine1', text)}
                    isValid={fieldValidity.addressLine1}
                />
                <TextField
                    label="Address Line 2"
                    hint="E.g., Apt 4B"
                    value={formData.addressLine2}
                    onChangeText={(text) => handleInputChange('addressLine2', text)}
                    isValid={fieldValidity.addressLine2}
                />
                <TextField
                    label="City *"
                    hint="E.g., New York"
                    value={formData.city}
                    onChangeText={(text) => handleInputChange('city', text)}
                    isValid={fieldValidity.city}
                />
                <TextField
                    label="State *"
                    hint="E.g., NY"
                    value={formData.state}
                    onChangeText={(text) => handleInputChange('state', text)}
                    isValid={fieldValidity.state}
                />
                <TextField
                    label="Country *"
                    hint="E.g., USA"
                    value={formData.country}
                    onChangeText={(text) => handleInputChange('country', text)}
                    isValid={fieldValidity.country}
                />
                <TextField
                    label="ZIP / Postal Code"
                    hint="E.g., 10001 or 10001-1234"
                    value={formData.zipCode}
                    onChangeText={(text) => handleInputChange('zipCode', text)}
                    isValid={fieldValidity.zipCode}
                />
                <TextField
                    label="Email Address *"
                    hint="E.g., example@email.com"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    isValid={fieldValidity.email}
                />
                <TextField
                    label="Telephone Number"
                    hint="E.g., 1234567890"
                    value={formData.telephone}
                    onChangeText={(text) => handleInputChange('telephone', text)}
                    isValid={fieldValidity.telephone}
                />
                <TextField
                    label="Mobile Number *"
                    hint="E.g., 1234567890"
                    value={formData.mobile}
                    onChangeText={(text) => handleInputChange('mobile', text)}
                    isValid={fieldValidity.mobile}
                />
                <TextField
                    label="Address in Sri Lanka"
                    hint="E.g., 123 Main St, Colombo"
                    value={formData.addressInSriLanka}
                    onChangeText={(text) => handleInputChange('addressInSriLanka', text)}
                    isValid={fieldValidity.addressInSriLanka}
                />
            </ScrollView>

            <View style={styles.nextButton}>
                <NextButton
                    onPress={handleNextPress}
                    disabled={false}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        backgroundColor: Colors.pallete.white,
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerText: {
        fontSize: 30,
        marginBottom: 10,
        fontFamily: "JosefinSansMedium",
    },
    sectionHeaderBox: {
        backgroundColor: Colors.pallete.accent,
        alignItems: 'center',
        padding: 10,
        paddingVertical: 5,
        height: 65
    },
    sectionHeader: {
        fontSize: 38,
        fontFamily: "JosefinSansMedium",
        color: Colors.pallete.white,
    },
    stepsContainer: {
        padding: 20,
        backgroundColor: Colors.pallete.extralightgrey,
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
    },
    nextButton: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default ContactInfoScreen;
