import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Colors} from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";

const VisaApplicationProcess = () => {
    const handleLetsGo= () => {
        router.push("/select_category");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>The Visa Application Process</Text>
            <ScrollView contentContainerStyle={styles.stepsContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>1.</Text>
                    <Text style={styles.stepText}>Select the visa category</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>2.</Text>
                    <Text style={styles.stepText}>Select if you are applying for a single applicant or a group of applicants</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>3.</Text>
                    <Text style={styles.stepText}>Fill the application form. You'll need to submit [documents]</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>4.</Text>
                    <Text style={styles.stepText}>Review the information carefully and submit the application</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>5.</Text>
                    <Text style={styles.stepText}>After submitting you'll be directed to the payment page</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>6.</Text>
                    <Text style={styles.stepText}>Once the payment is settled successfully, you can track the process of your application validation</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>7.</Text>
                    <Text style={styles.stepText}>When your visa is granted, you'll get a notification and an email with a downloadable document</Text>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepNumber}>8.</Text>
                    <Text style={styles.stepText}>In case your application encountered any issue and was rejected, you'll be notified and you can edit the relevant details and re-apply.</Text>
                </View>
            </ScrollView>

            <View style={styles.button}>
                <CustomButton
                    width={250}
                    title="Let's Go!"
                    onPress={handleLetsGo}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pallete.white,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    },
    headerText: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: "JosefinSansMedium",
    },
    stepsContainer: {
        paddingBottom: 20,
    },
    step: {
        backgroundColor: Colors.pallete.extralightgrey,
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    stepNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginRight: 5,
        fontFamily: "SpaceMono",
    },
    stepText: {
        fontSize: 16,
        fontFamily: "SpaceMono",
        fontWeight: 'bold',
        paddingRight: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
    }
});

export default VisaApplicationProcess;
