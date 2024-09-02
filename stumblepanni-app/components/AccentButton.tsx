import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const AccentButton = ({ onPress, title, style, textStyle }: { onPress: () => void; title: string; style?: any; textStyle?: any }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.pallete.accent,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.pallete.white,
    fontSize: 20,
    fontFamily: 'JosefinSansBold',
  },
});

export default AccentButton;
