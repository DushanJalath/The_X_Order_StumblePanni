import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

const InputView = ({
  type,
  placeholder,
  validation,
  style,
  textStyle,
}: {
  type: "default" | "email" | "pass" | "phone" | "dropdown";
  placeholder: string;
  data?: any;
  validation?: () => {};
  style?: any;
  textStyle?: any;
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(type === "pass");
  const [value, setValue] = useState("");

  const handleToggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  


  const keyboardType = type === "phone" ? "numeric" : "default";

  return (
    <View style={styles.inputContainer}>
      {/* <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} /> */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.pallete.mediumgrey}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={setValue}
      />
      {type === "pass" && (
        <TouchableOpacity onPress={handleToggleSecureEntry}>
          <Ionicons
            name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
            size={24}
            color={Colors.pallete.mediumgrey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "JosefinSansMedium",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.pallete.neutralgrey,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    // paddingVertical: 15,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.pallete.mediumgrey,
  },
});

export default InputView;
