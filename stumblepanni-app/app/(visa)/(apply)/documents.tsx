import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Colors} from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import FileUploadButton from "@/components/FileUploadButton";
import {RadioButton} from 'react-native-paper';
import {router, useLocalSearchParams} from "expo-router"; // Make sure to install this package

interface FileObject {
    name: string;
    uri: string;
    type: string | undefined;
    size: number | undefined;
}

const Document: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileObject[]>([]);
    const [declarations, setDeclarations] = useState({
        residentialVisa: '',
        validETA: '',
        multipleEntryVisa: ''
    });

    const { selectedCategory,personalInfo,contactInfo,travelInfo  } = useLocalSearchParams();
    const parsedPersonalInfo = JSON.parse(personalInfo as string);
    const parsedContactInfo = JSON.parse(contactInfo as string);
    const parsedTravelInfo = JSON.parse(travelInfo as string);

    const requiredDocuments = [
        "Recent Passport-sized Photograph",
        "Scanned Copy of the First Page of Your Passport",
        "Financial Proof Documents",
        "Travel history of the last 12 months"
    ];

    const handleFilePicked = (file: FileObject) => {
        setSelectedFiles([...selectedFiles, file]);
    };

    const handleDeclarationChange = (name: string, value: string) => {
        setDeclarations(prev => ({...prev, [name]: value}));
    };

    const handleSubmitPress = () => {
        if (selectedFiles.length < requiredDocuments.length) {
            Alert.alert(
                "Missing Documents",
                "Please upload all required documents before submitting.",
                [{text: "OK"}]
            );
        } else if (Object.values(declarations).some(value => value !== 'yes')) {
            Alert.alert(
                "Declaration Incomplete",
                "Please answer 'yes' to all declaration questions before submitting.",
                [{text: "OK"}]
            );
        } else {
            // console.log("All documents uploaded and declarations completed. Selected files: ", selectedFiles);
            const fileReferences = selectedFiles.map((file, index) => ({
                documentType: requiredDocuments[index],
                fileName: file.name,
                fileUri: file.uri
            }));

            // Navigate to review page
            router.push({
                pathname: "/review",
                params: {
                    selectedCategory: selectedCategory,
                    personalInfo: JSON.stringify(parsedPersonalInfo),
                    contactInfo: JSON.stringify(parsedContactInfo),
                    travelInfo: JSON.stringify(parsedTravelInfo),
                    fileReferences: JSON.stringify(fileReferences),
                },
            });
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerText}>Apply for Your Visa</Text>
                <View style={styles.sectionHeaderBox}>
                    <Text style={styles.sectionHeader}>Documents</Text>
                </View>
                <View style={styles.stepsContainer}>
                    {requiredDocuments.map((doc, index) => (
                        <FileUploadButton
                            key={index}
                            label={`${doc} *`}
                            mimetype={index === 0 ? "image/*" : "application/*"}
                            onFilePicked={handleFilePicked}
                        />
                    ))}
                </View>
                <View style={styles.declerationHeader}>
                    <Text style={styles.declerationHeaderText}>Declaration</Text>
                </View>

                <View style={styles.declarationContainer}>
                    <DeclarationQuestion
                        question="Do you have a valid residential visa to Sri Lanka?"
                        value={declarations.residentialVisa}
                        onValueChange={(value) => handleDeclarationChange('residentialVisa', value)}
                    />
                    <DeclarationQuestion
                        question="Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?"
                        value={declarations.validETA}
                        onValueChange={(value) => handleDeclarationChange('validETA', value)}
                    />
                    <DeclarationQuestion
                        question="Do you have a multiple entry visa to Sri Lanka?"
                        value={declarations.multipleEntryVisa}
                        onValueChange={(value) => handleDeclarationChange('multipleEntryVisa', value)}
                    />
                </View>
                <View style={styles.nextButton}>
                    <CustomButton width={250} title={"Submit"} onPress={handleSubmitPress}/>
                </View>
            </View>
        </ScrollView>

    );
};

const DeclarationQuestion: React.FC<{
    question: string;
    value: string;
    onValueChange: (value: string) => void;
}> = ({question, value, onValueChange}) => (
    <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <View style={styles.radioGroup}>
            <RadioButton.Group onValueChange={onValueChange} value={value}>
                <View style={styles.radioButton}>
                    <RadioButton value="yes" color={Colors.pallete.accent}/>
                    <Text>Yes</Text>
                </View>
                <View style={styles.radioButton}>
                    <RadioButton value="no" color={Colors.pallete.accent}/>
                    <Text>No</Text>
                </View>
            </RadioButton.Group>
        </View>
    </View>
);

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
        alignItems: 'center',
    },
    declarationContainer: {
        backgroundColor: Colors.pallete.extralightgrey,
        padding: 20,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
    },
    declerationHeader: {
        backgroundColor: "#9ac0c2",
        padding: 8,
        borderColor: Colors.pallete.black,
        borderWidth: 1,
    },
    declerationHeaderText: {
        fontSize: 20,
        fontFamily: "LatoRegular",
        color: Colors.pallete.black,
    },
    questionContainer: {
        marginBottom: 15,
    },
    questionText: {
        fontSize: 16,
        marginBottom: 5,
    },
    radioGroup: {
        flexDirection: 'row',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    nextButton: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Document;