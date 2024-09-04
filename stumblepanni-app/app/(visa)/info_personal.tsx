import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {Colors} from "@/constants/Colors";
import {router} from "expo-router";
import FormField from "@/components/FormField";
import NextButton from "@/components/NextButton";

const PersonalInfoScreen: React.FC = () => {
    const [surname, setSurname] = useState('');
    const [givenNames, setGivenNames] = useState('');
    const [title, setTitle] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [countryOfBirth, setCountryOfBirth] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [passportIssuedDate, setPassportIssuedDate] = useState('');
    const [passportExpiryDate, setPassportExpiryDate] = useState('');
    const [occupation, setOccupation] = useState('');

    const isSurnameValid = /^[a-zA-Z\s]+$/.test(surname);
    const isGivenNamesValid = /^[a-zA-Z\s]+$/.test(givenNames);
    const isDateOfBirthValid = /^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth);
    const isPassportNumberValid = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/.test(passportNumber);
    const isDateValid = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date);

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid([
            isSurnameValid,
            isGivenNamesValid,
            title,
            isDateOfBirthValid,
            gender,
            nationality,
            countryOfBirth,
            isPassportNumberValid,
            isDateValid(passportIssuedDate),
            isDateValid(passportExpiryDate),
            occupation
        ].every(Boolean));
    }, [surname, givenNames, title, dateOfBirth, gender, nationality, countryOfBirth, passportNumber, passportIssuedDate, passportExpiryDate, occupation]);

    const handleNextPress = () => {
        if (isFormValid) {
            console.log('Personal Information:', {
                surname,
                givenNames,
                title,
                dateOfBirth,
                gender,
                nationality,
                countryOfBirth,
                passportNumber,
                passportIssuedDate,
                passportExpiryDate,
                occupation
            });
            router.push("/");
        } else {
            Alert.alert("Validation Error", "Please fill all fields correctly.");
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={styles.headerText}>Apply for Your Visa</Text>
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Personal Information</Text>
            </View>

            <ScrollView contentContainerStyle={styles.stepsContainer}>
                <FormField
                    value={surname}
                    onChangeText={setSurname}
                    placeholder="Surname/ Family Name *"
                    isValid={isSurnameValid}
                    hint="Enter your family or last name as it appears on your passport."
                />
                <FormField
                    value={givenNames}
                    onChangeText={setGivenNames}
                    placeholder="Given Names *"
                    isValid={isGivenNamesValid}
                    hint="Enter your given names as they appear on your passport."
                />
                <FormField
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Title *"
                    isValid={!!title}
                    hint="Enter your title (e.g., Mr, Mrs, Dr)."
                />
                <FormField
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    placeholder="Date of Birth *"
                    isValid={isDateOfBirthValid}
                    hint="Enter your date of birth in YYYY-MM-DD format."
                    keyboardType="numeric"
                />
                <FormField
                    value={gender}
                    onChangeText={setGender}
                    placeholder="Gender *"
                    isValid={!!gender}
                    hint="Enter your gender (e.g., Male, Female)."
                />
                <FormField
                    value={nationality}
                    onChangeText={setNationality}
                    placeholder="Nationality *"
                    isValid={!!nationality}
                    hint="Enter your nationality."
                />
                <FormField
                    value={countryOfBirth}
                    onChangeText={setCountryOfBirth}
                    placeholder="Country of Birth *"
                    isValid={!!countryOfBirth}
                    hint="Enter the country where you were born."
                />
                <FormField
                    value={passportNumber}
                    onChangeText={setPassportNumber}
                    placeholder="Passport Number *"
                    isValid={isPassportNumberValid}
                    hint="Enter your passport number."
                />
                <FormField
                    value={passportIssuedDate}
                    onChangeText={setPassportIssuedDate}
                    placeholder="Passport Issued Date *"
                    isValid={isDateValid(passportIssuedDate)}
                    hint="Enter the date your passport was issued in YYYY-MM-DD format."
                    keyboardType="numeric"
                />
                <FormField
                    value={passportExpiryDate}
                    onChangeText={setPassportExpiryDate}
                    placeholder="Passport Expiry Date *"
                    isValid={isDateValid(passportExpiryDate)}
                    hint="Enter the date your passport expires in YYYY-MM-DD format."
                    keyboardType="numeric"
                />
                <FormField
                    value={occupation}
                    onChangeText={setOccupation}
                    placeholder="Occupation"
                    isValid={true}
                    hint="Enter your occupation."
                />
            </ScrollView>

            <View style={styles.nextButton}>
                <NextButton
                    disabled={false}
                    onPress={handleNextPress}
                />
            </View>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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