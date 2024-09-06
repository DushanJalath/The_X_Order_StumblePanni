import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import {useLocalSearchParams} from "expo-router";
import Checkbox from 'expo-checkbox';


const ReviewApplication: React.FC = () => {
    const {selectedCategory, personalInfo, contactInfo, travelInfo, fileReferences} = useLocalSearchParams();
    const parsedPersonalInfo = JSON.parse(personalInfo as string);
    const parsedContactInfo = JSON.parse(contactInfo as string);
    const parsedTravelInfo = JSON.parse(travelInfo as string);
    const passedFileReferences = JSON.parse(fileReferences as string);

    const [checked, setChecked] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Review Your Application</Text>

            {/* Personal Information Section */}
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Personal Information</Text>
            </View>
            <View style={styles.infoContainer}>
                {[
                    {label: "● Surname/ Family Name", value: parsedPersonalInfo.surname},
                    {label: "● Other/ Given Names", value: parsedPersonalInfo.givenNames},
                    {label: "● Title", value: parsedPersonalInfo.title},
                    {label: "● Date of Birth", value: parsedPersonalInfo.dateOfBirth},
                    {label: "● Gender", value: parsedPersonalInfo.gender},
                    {label: "● Nationality", value: parsedPersonalInfo.nationality},
                    {label: "● Country of Birth", value: parsedPersonalInfo.countryOfBirth},
                    {label: "● Passport Number", value: parsedPersonalInfo.passportNumber},
                    {label: "● Passport Issued Date", value: parsedPersonalInfo.passportIssuedDate},
                    {label: "● Passport Expiry Date", value: parsedPersonalInfo.passportExpiryDate},
                    {label: "● Occupation", value: parsedPersonalInfo.occupation},
                ].map((item, index) => (
                    <Text style={styles.infoText} key={index}>{item.label}: <Text
                        style={styles.boldText}>{item.value || "N/A"}</Text></Text>
                ))}
            </View>

            {/* Contact Information Section */}
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Contact Information</Text>
            </View>
            <View style={styles.infoContainer}>
                {[
                    {label: "● Address Line 1", value: parsedContactInfo.addressLine1},
                    {label: "● Address Line 2", value: parsedContactInfo.addressLine2},
                    {label: "● City", value: parsedContactInfo.city},
                    {label: "● State", value: parsedContactInfo.state},
                    {label: "● Country", value: parsedContactInfo.country},
                    {label: "● ZIP/ Postal Code", value: parsedContactInfo.zipCode},
                    {label: "● Email Address", value: parsedContactInfo.email},
                    {label: "● Telephone Number", value: parsedContactInfo.telephone},
                    {label: "● Mobile Number", value: parsedContactInfo.mobile},
                    {label: "● Address In Sri Lanka", value: parsedContactInfo.addressInSriLanka},
                ].map((item, index) => (
                    <Text style={styles.infoText} key={index}>{item.label}: <Text
                        style={styles.boldText}>{item.value || "N/A"}</Text></Text>
                ))}
            </View>

            {/* Travel Information Section */}
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Travel Information</Text>
            </View>
            <View style={styles.infoContainer}>
                {[
                    {label: "● Your locations in the past 14 days", value: parsedTravelInfo.last14DaysTravel},
                    {label: "● Visa Required No. of Days", value: parsedTravelInfo.visaRequiredDays},
                    {label: "● Intended Arrival Date", value: parsedTravelInfo.intendedArrivalDate},
                    {label: "● Purpose of Visit", value: parsedTravelInfo.purposeOfVisit},
                    {label: "● Port of Departure", value: parsedTravelInfo.portOfDeparture},
                    {label: "● Airline/ Vessel", value: parsedTravelInfo.airlineVessel},
                    {label: "● Flight/ Vessel Number", value: parsedTravelInfo.flightVesselNumber},
                ].map((item, index) => (
                    <Text style={styles.infoText} key={index}>{item.label}: <Text
                        style={styles.boldText}>{item.value || "N/A"}</Text></Text>
                ))}
            </View>

            {/* Documents Section */}
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Documents</Text>
            </View>
            <View style={styles.infoContainer}>
                {[
                    {label: "● Recent Passport-sized Photograph", value: "Uploaded"},
                    {label: "● Scanned Copy of the First Page of the Passport", value: "Uploaded"},
                    {label: "● Financial Proof Documents", value: "Uploaded"},
                ].map((item, index) => (
                    <Text style={styles.infoText} key={index}>{item.label}: <Text
                        style={styles.boldText}>{item.value || "N/A"}</Text></Text>
                ))}
            </View>

            {/* Declaration Section */}
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Declaration</Text>
            </View>
            <View style={styles.infoContainer}>
                {[
                    {label: "● Do you have a valid residential visa to Sri Lanka?", value: "Yes"},
                    {
                        label: "● Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?",
                        value: "Yes"
                    },
                    {label: "● Do you have a multiple entry visa to Sri Lanka?", value: "Yes"},
                ].map((item, index) => (
                    <Text style={styles.infoText} key={index}>{item.label}: <Text
                        style={styles.boldText}>{item.value}</Text></Text>
                ))}
            </View>

            <View style={styles.checkbox}>
                <Checkbox
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                />
                <Text style={{fontSize: 16,paddingLeft:10}}>I confirm that the above details are accurate</Text>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:"#447e7f"}]}
                    onPress={() => {
                        // Navigate to '/info_personal'
                    }}
                >
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={[styles.button,{backgroundColor:"#305858"}]}
                    onPress={() => {
                        if (checked) {
                            // Navigate to '/submit_success'
                        } else {
                            alert('Please confirm that the above details are accurate.');
                        }
                    }}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
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
        alignItems: 'flex-start',
        padding: 10,
        paddingVertical: 5,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
    },
    sectionHeader: {
        fontSize: 20,
        fontFamily: "JosefinSansMedium",
        color: Colors.pallete.white,
    },
    infoContainer: {
        padding: 20,
        backgroundColor: Colors.pallete.extralightgrey,
        marginBottom: 15,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
    },
    infoText: {
        fontSize: 12,
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
    },
    nextButton: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        height: 52,
        paddingVertical: 6,
        borderRadius: 50,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        width: 150
    },
    buttonText: {
        color: Colors.pallete.white,
        fontSize: 25,
        fontFamily: "JosefinSansMedium",
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    checkbox: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    }
});

export default ReviewApplication;
