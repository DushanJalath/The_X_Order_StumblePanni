import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import {router} from "expo-router";
import NextButton from "@/components/NextButton";
import {TextField, DateField} from '@/components/CustomFormComponents';
import {useLocalSearchParams} from "expo-router";
import {Colors} from "@/constants/Colors";

interface FormData {
    last14DaysTravel: string;
    visaRequiredDays: string;
    intendedArrivalDate: Date;
    purposeOfVisit: string;
    portOfDeparture: string;
    airlineVessel: string;
    flightVesselNumber: string;
}

type FieldValidity = {
    [K in keyof FormData]: boolean;
};

const TravelInfoScreen: React.FC = () => {
    const { selectedCategory,personalInfo,contactInfo  } = useLocalSearchParams();
    const parsedPersonalInfo = JSON.parse(personalInfo as string);
    const parsedContactInfo = JSON.parse(contactInfo as string);

    const [formData, setFormData] = useState<FormData>({
        last14DaysTravel: '',
        visaRequiredDays: '',
        intendedArrivalDate: new Date('1000-01-01'),
        purposeOfVisit: '',
        portOfDeparture: '',
        airlineVessel: '',
        flightVesselNumber: '',
    });

    const [fieldValidity, setFieldValidity] = useState<FieldValidity>({
        last14DaysTravel: true,
        visaRequiredDays: true,
        intendedArrivalDate: true,
        purposeOfVisit: true,
        portOfDeparture: true,
        airlineVessel: true,
        flightVesselNumber: true,
    });

    const handleInputChange = (name: keyof FormData, value: string | Date) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateFields = () => {
        const validations: FieldValidity = {
            last14DaysTravel: /^[a-zA-Z\s,]+$/.test(formData.last14DaysTravel),
            visaRequiredDays: /^\d+$/.test(formData.visaRequiredDays),
            intendedArrivalDate: formData.intendedArrivalDate.toDateString() !== new Date('1000-01-01').toDateString(),
            purposeOfVisit: /^[a-zA-Z\s]+$/.test(formData.purposeOfVisit),
            portOfDeparture: /^[a-zA-Z\s]*$/.test(formData.portOfDeparture),
            airlineVessel: /^[a-zA-Z\s]*$/.test(formData.airlineVessel),
            flightVesselNumber: /^[A-Z0-9]*$/.test(formData.flightVesselNumber),
        };

        setFieldValidity(validations);
        return Object.values(validations).every(Boolean);
    };

    const handleNextPress = () => {
        if (validateFields()) {
            //Test
            console.log('Travel Information:', formData);
            console.log(selectedCategory, parsedPersonalInfo, parsedContactInfo);
            router.push({
                pathname: "/documents",
                params: {
                    selectedCategory: selectedCategory,
                    personalInfo: JSON.stringify(parsedPersonalInfo),
                    contactInfo: JSON.stringify(parsedContactInfo),
                    travelInfo: JSON.stringify(formData),
                },
            });
        } else {
            Alert.alert("Validation Error", "Please fill all fields correctly.");
            //Test
            console.log('Travel Information:', formData);
            console.log(selectedCategory, parsedPersonalInfo, parsedContactInfo);
            router.push({
                pathname: "/documents",
                params: {
                    selectedCategory: selectedCategory,
                    personalInfo: JSON.stringify(parsedPersonalInfo),
                    contactInfo: JSON.stringify(parsedContactInfo),
                    travelInfo: JSON.stringify(formData),
                },
            });
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.headerText}>Apply for Your Visa</Text>
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Travel Information</Text>
            </View>

            <ScrollView contentContainerStyle={styles.stepsContainer}>
                <TextField
                    label="Where You Have Been For Last 14 Days *"
                    hint="Enter the countries you've visited in the last 14 days"
                    value={formData.last14DaysTravel}
                    onChangeText={(text) => handleInputChange('last14DaysTravel', text)}
                    isValid={fieldValidity.last14DaysTravel}
                />
                <TextField
                    label="Visa Required No. of Days *"
                    hint="Enter the number of days you need a visa for"
                    value={formData.visaRequiredDays}
                    onChangeText={(text) => handleInputChange('visaRequiredDays', text)}
                    isValid={fieldValidity.visaRequiredDays}
                />
                <DateField
                    label="Intended Arrival Date *"
                    hint="Select your intended arrival date"
                    value={formData.intendedArrivalDate}
                    onChange={(date) => handleInputChange('intendedArrivalDate', date)}
                    isValid={fieldValidity.intendedArrivalDate}
                />
                <TextField
                    label="Purpose of Visit *"
                    hint="Enter the purpose of your visit"
                    value={formData.purposeOfVisit}
                    onChangeText={(text) => handleInputChange('purposeOfVisit', text)}
                    isValid={fieldValidity.purposeOfVisit}
                />
                <TextField
                    label="Port of Departure"
                    hint="Enter your port of departure (optional)"
                    value={formData.portOfDeparture}
                    onChangeText={(text) => handleInputChange('portOfDeparture', text)}
                    isValid={fieldValidity.portOfDeparture}
                />
                <TextField
                    label="Airline/ Vessel"
                    hint="Enter your airline or vessel (optional)"
                    value={formData.airlineVessel}
                    onChangeText={(text) => handleInputChange('airlineVessel', text)}
                    isValid={fieldValidity.airlineVessel}
                />
                <TextField
                    label="Flight/ Vessel Number"
                    hint="Enter your flight or vessel number (optional)"
                    value={formData.flightVesselNumber}
                    onChangeText={(text) => handleInputChange('flightVesselNumber', text)}
                    isValid={fieldValidity.flightVesselNumber}
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

export default TravelInfoScreen;
