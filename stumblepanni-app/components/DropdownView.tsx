import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Colors } from "@/constants/Colors";

const DropdownView = ({
  placeholder,
  items,
}: {
  placeholder: string;
  items: {label: string, value: string}[];
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "green" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={styles.itemTextStyle}
        containerStyle={styles.containerStyle}
        data={items}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownView;

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
    height: 50,
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontFamily: "JosefinSansMedium",
    color: Colors.pallete.darkgrey,
    borderRadius: 8,
  },
  itemTextStyle: {
    fontFamily: "JosefinSansMedium",
    color: Colors.pallete.darkgrey,
  },
  containerStyle: {
    backgroundColor: Colors.pallete.neutralgrey,
    borderRadius: 15,
    marginBottom: 15,
    paddingBottom: 5,
  },
  placeholderStyle: {
    fontFamily: "JosefinSansMedium",
    color: Colors.pallete.mediumgrey,
  },
  selectedTextStyle: {
    fontFamily: "JosefinSansMedium",
    color: Colors.pallete.darkgrey,
  },
  dropdown: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
