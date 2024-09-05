import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import FileUploadButton from "@/components/FileUploadButton";

interface FileObject {
    name: string;
    uri: string;
    type: string | undefined;
    size: number | undefined;
}

const Document: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileObject[]>([]);

    const handleFilePicked = (file: FileObject) => {
        setSelectedFiles([...selectedFiles, file]);
    };

    const handleSubmitPress = () => {
        console.log("Selected files: ", selectedFiles);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Apply for Your Visa</Text>
            <View style={styles.sectionHeaderBox}>
                <Text style={styles.sectionHeader}>Documents</Text>
            </View>
            <View style={styles.stepsContainer}>
                <FileUploadButton
                    label="Recent Passport-sized Photograph *"
                    mimetype="image/*"
                    onFilePicked={handleFilePicked}
                />
                <FileUploadButton
                    label="Scanned Copy of the First Page of Your Passport *"
                    mimetype="application/*"
                    onFilePicked={handleFilePicked}
                />
                <FileUploadButton
                    label="Financial Proof Documents *"
                    mimetype="application/*"
                    onFilePicked={handleFilePicked}
                />
                <FileUploadButton
                    label="Travel history of the last 12 months *"
                    mimetype="application/*"
                    onFilePicked={handleFilePicked}
                />
            </View>
            <View style={styles.nextButton}>
                <CustomButton width={250} title={"Submit"} onPress={handleSubmitPress} />
            </View>
        </View>
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
        alignItems: 'center',
    },
    nextButton: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Document;