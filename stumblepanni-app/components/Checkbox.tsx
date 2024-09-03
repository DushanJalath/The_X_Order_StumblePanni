import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";

const Checkbox = ({
  size = 24,
  onValueChange,
  text,
  textStyle,
}: {
  size?: number;
  onValueChange?: () => {};
  text?: string;
  textStyle?: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onValueChange) {
      onValueChange();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.checkboxWrapper}>
        <MaterialIcons
          name={isChecked ? "check-circle" : "check-circle-outline"}
          size={size}
          color={isChecked ? Colors.pallete.accent : Colors.pallete.mediumgrey}
          style={styles.checkbox}
        />
        {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginLeft: 10,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: Colors.pallete.mediumgrey,
    fontFamily: "JosefinSansLight",
    marginLeft: 10,
  },
});

export default Checkbox;
