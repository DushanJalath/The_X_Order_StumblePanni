import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Colors } from "@/constants/Colors";

/**
 * DropdownView component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.placeholder - The placeholder text for the dropdown.
 * @param {Array} props.items - The array of items for the dropdown.
 * @param {Function} props.onChange - The callback function called when the dropdown value changes.
 * @param {Function} [props.validationFunction] - The optional validation function to validate the dropdown value.
 * @param {Function} [props.onValidation] - The optional callback function called after validation. This passing function is called with a boolean result of the validation.
 * @returns {JSX.Element} The rendered DropdownView component.
 */
const DropdownView = ({
  placeholder,
  items,
  onChange,
  validationFunction,
  onValidation,
}: {
  placeholder: string;
  items: { label: string; value: string }[];
  onChange: (text: string) => void;
  validationFunction?: (text: string) => boolean;
  onValidation?: (isValid: boolean) => void;
}) => {
  // States
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleOnChange = (item: { label: string; value: string }) => {
    setValue(item.value);
    setIsFocus(false);
    onChange(item.value);
    if (onValidation)
      validationFunction && validationFunction(item.value)
        ? onValidation(true)
        : onValidation(false);
    // If onValidation is provided, & validationFunction provided, & validationFunction is true, THEN set onValidation called with true ELSE set onValidation called with false
  };

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
        onChange={handleOnChange}
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
    borderWidth: 1,
    borderColor: Colors.pallete.mediumgrey,
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
