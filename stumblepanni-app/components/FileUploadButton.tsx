import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import * as DocumentPicker from "expo-document-picker";
import { AntDesign } from "@expo/vector-icons";

interface NextButtonProps {
    label: string;
    mimetype: string;
    onFilePicked: (file:FileObject) => void;
}

interface FileObject {
    name: string;
    uri: string;
    type: string | undefined;
    size: number | undefined;
}


const FileUploadButton: React.FC<NextButtonProps> = ({ label, mimetype, onFilePicked }) => {
    const [buttonLabel, setButtonLabel] = useState(label);
    const [labelColor, setLabelColor] = useState(Colors.pallete.black);
    const [borderColor, setBorderColor] = useState(Colors.pallete.mediumgrey);

    const pickSomething = async () => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: mimetype,
            });
            if (!docRes.canceled) {
                setButtonLabel(docRes.assets[0].name);
                setLabelColor(Colors.pallete.black);
                setBorderColor(Colors.pallete.black);
                const assets = docRes.assets;
                const file0 = assets[0];
                const file = {
                    name: file0.name.split(".")[0],
                    uri: file0.uri,
                    type: file0.mimeType,
                    size: file0.size,
                };
                onFilePicked(file);
            }
            console.log(docRes);
        } catch (error) {
            Alert.alert("Error", "An error occurred while picking the file");
        }
    };

    return (
        <TouchableOpacity
            style={[styles.uploadButton, { borderColor: borderColor }]}
            onPress={pickSomething}
        >
            <Text style={[styles.nextButtonText, { color: labelColor }]}>{buttonLabel}</Text>
            <AntDesign
                name="upload"
                size={24}
                color={Colors.pallete.mediumgrey}
                style={styles.icon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    uploadButton: {
        backgroundColor: Colors.pallete.extralightgrey,
        height: 80,
        borderRadius: 10,
        marginBottom: 12,
        alignItems: 'center',
        width: 300,
        borderWidth: 1,
    },
    nextButtonText: {
        fontSize: 20,
        fontFamily: "JosefinSansLight",
        textAlign: "center",
        color: Colors.pallete.mediumgrey,
    },
    icon: {
        marginTop: 6,
    },
});

export default FileUploadButton;