import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {router} from "expo-router";
import NextButton from "@/components/NextButton";
import {TextField, DateField, DropdownField} from '@/components/CustomFormComponents';
import {useLocalSearchParams} from "expo-router";
import {Colors} from "@/constants/Colors";

interface FormData {
    surname: string;
    givenNames: string;
    title: string;
    dateOfBirth: Date;
    gender: string;
    nationality: string;
    countryOfBirth: string;
    passportNumber: string;
    passportIssuedDate: Date;
    passportExpiryDate: Date;
    occupation: string;
}

type FieldValidity = {
    [K in keyof FormData]: boolean;
};

const PersonalInfoScreen: React.FC = () => {
    const {selectedOption} = useLocalSearchParams();

    const [formData, setFormData] = useState<FormData>({
        surname: '',
        givenNames: '',
        title: '',
        dateOfBirth: new Date('1000-01-01'),
        gender: '',
        nationality: '',
        countryOfBirth: '',
        passportNumber: '',
        passportIssuedDate: new Date('1000-01-01'),
        passportExpiryDate: new Date('1000-01-01'),
        occupation: '',
    });

    const [fieldValidity, setFieldValidity] = useState<FieldValidity>({
        surname: true,
        givenNames: true,
        title: true,
        dateOfBirth: true,
        gender: true,
        nationality: true,
        countryOfBirth: true,
        passportNumber: true,
        passportIssuedDate: true,
        passportExpiryDate: true,
        occupation: true,
    });

    const handleInputChange = (name: keyof FormData, value: string | Date) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateFields = () => {
        const validations: FieldValidity = {
            surname: /^[a-zA-Z\s]+$/.test(formData.surname),
            givenNames: /^[a-zA-Z\s]+$/.test(formData.givenNames),
            title: !!formData.title,
            dateOfBirth: formData.dateOfBirth.toDateString() !== new Date('1000-01-01').toDateString(),
            gender: !!formData.gender,
            nationality: /^[a-zA-Z\s]+$/.test(formData.nationality),
            countryOfBirth: /^[a-zA-Z\s]+$/.test(formData.countryOfBirth),
            passportNumber: /^[A-Z0-9]{6,9}$/.test(formData.passportNumber),
            passportIssuedDate: formData.passportIssuedDate.toDateString() !== new Date('1000-01-01').toDateString(),
            passportExpiryDate: formData.passportExpiryDate.toDateString() !== new Date('1000-01-01').toDateString(),
            occupation: /^[a-zA-Z\s]+$/.test(formData.occupation),
        };

        setFieldValidity(validations);
        return Object.values(validations).every(Boolean);
    };

    const handleNextPress = () => {
        if (validateFields()) {
            //Test
            console.log('Personal Information:', formData);
            console.log('Selected Category:', selectedOption);

            router.push({
                pathname: "/info_contact",
                params: {
                    personalInfo: JSON.stringify(formData),
                    selectedCategory: selectedOption,
                },
            });
        } else {
            Alert.alert("Validation Error", "Please fill all fields correctly.");
            //Test
            console.log('Personal Information:', formData);
            console.log('Selected Category:', selectedOption);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.headerText}>Apply for Your Visa</Text>
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Personal Information</Text>
            </View>

            <ScrollView contentContainerStyle={styles.stepsContainer}>
                <TextField
                    label="Surname / Family Name *"
                    hint="It will be appears on your passport"
                    value={formData.surname}
                    onChangeText={(text) => handleInputChange('surname', text)}
                    isValid={fieldValidity.surname}
                />
                <TextField
                    label="Other / Given Names *"
                    hint="It will be appears on your passport"
                    value={formData.givenNames}
                    onChangeText={(text) => handleInputChange('givenNames', text)}
                    isValid={fieldValidity.givenNames}
                />
                <DropdownField
                    label="Title *"
                    hint="Select your title"
                    value={formData.title}
                    onValueChange={(value) => handleInputChange('title', value)}
                    items={[
                        {label: 'Mr', value: 'Mr'},
                        {label: 'Mrs', value: 'Mrs'},
                        {label: 'Ms', value: 'Ms'},
                        {label: 'Dr', value: 'Dr'},
                    ]}
                    isValid={fieldValidity.title}
                />
                <DateField
                    label="Date of Birth *"
                    hint="Select your date of birth"
                    value={formData.dateOfBirth}
                    onChange={(date) => handleInputChange('dateOfBirth', date)}
                    isValid={fieldValidity.dateOfBirth}
                />
                <DropdownField
                    label="Gender *"
                    hint="Select your gender"
                    value={formData.gender}
                    onValueChange={(value) => handleInputChange('gender', value)}
                    items={[
                        {label: 'Male', value: 'Male'},
                        {label: 'Female', value: 'Female'},
                        {label: 'Other', value: 'Other'},
                    ]}
                    isValid={fieldValidity.gender}
                />
                <TextField
                    label="Nationality *"
                    hint="Select your nationality"
                    value={formData.nationality}
                    onChangeText={(text) => handleInputChange('nationality', text)}
                    isValid={fieldValidity.nationality}
                />
                <TextField
                    label="Country of Birth *"
                    hint="Enter your country of birth"
                    value={formData.countryOfBirth}
                    onChangeText={(text) => handleInputChange('countryOfBirth', text)}
                    isValid={fieldValidity.countryOfBirth}
                />
                <TextField
                    label="Passport Number *"
                    hint="passport number format: A1234567"
                    value={formData.passportNumber}
                    onChangeText={(text) => handleInputChange('passportNumber', text)}
                    isValid={fieldValidity.passportNumber}
                />
                <DateField
                    label="Passport Issued Date *"
                    hint="Select the date your passport was issued"
                    value={formData.passportIssuedDate}
                    onChange={(date) => handleInputChange('passportIssuedDate', date)}
                    isValid={fieldValidity.passportIssuedDate}
                />
                <DateField
                    label="Passport Expiry Date *"
                    hint="Select the expiry date of your passport"
                    value={formData.passportExpiryDate}
                    onChange={(date) => handleInputChange('passportExpiryDate', date)}
                    isValid={fieldValidity.passportExpiryDate}
                />
                <TextField
                    label="Occupation *"
                    hint="Enter your current occupation"
                    value={formData.occupation}
                    onChangeText={(text) => handleInputChange('occupation', text)}
                    isValid={fieldValidity.occupation}
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

export default PersonalInfoScreen;