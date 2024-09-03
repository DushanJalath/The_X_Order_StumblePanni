import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";

import AccentButton from "@/components/AccentButton";
import InputView from "@/components/InputView";
import Checkbox from "@/components/Checkbox";
import DropdownView from "@/components/DropdownView";
import { Colors } from "@/constants/Colors";
import { Data } from "@/constants/Data";
import { ScrollView } from "react-native-gesture-handler";

const handleRegister = () => {
  console.log("Register");
};

const signup = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create your new account</Text>

        <InputView type="default" placeholder="Name"></InputView>
        <InputView type="email" placeholder="Email"></InputView>
        <InputView type="phone" placeholder="Phone"></InputView>
        <InputView type="pass" placeholder="Password"></InputView>
        <DropdownView placeholder="Select Country" items={Data.countries} />

        <View style={styles.createAccountContainer}>
          <Text style={styles.wrapperText}>
            <Text style={styles.createAccountText}>
              By signing up you agree to our {}
            </Text>
            <Link href="/">
              <TouchableOpacity>
                <Text style={styles.createAccountLink}>
                  Terms & Conditions {}
                </Text>
              </TouchableOpacity>
            </Link>
            <Text style={styles.createAccountText}>and {}</Text>
            <Link href="/">
              <TouchableOpacity>
                <Text style={styles.createAccountLink}>Privacy Policy</Text>
              </TouchableOpacity>
            </Link>
          </Text>
        </View>
        <View style={styles.registerBtn}>
          <AccentButton
            onPress={handleRegister}
            title="Register"
          ></AccentButton>
        </View>
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Already have an account?</Text>
          <Link href="/">
            <TouchableOpacity>
              <Text style={styles.createAccountLink}>Log in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  createAccountContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  createAccountText: {
    color: Colors.pallete.darkgrey,
    fontFamily: "JosefinSansLight",
  },
  createAccountLink: {
    color: Colors.pallete.accent,
    fontFamily: "JosefinSansMedium",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  forgotPassword: {
    fontSize: 12,
    fontFamily: "JosefinSansMedium",
    color: Colors.pallete.accent,
  },
  label: {
    fontSize: 14,
    color: "gray",
  },
  title: {
    fontSize: 36,
    fontFamily: "JosefinSansBold",
    color: Colors.pallete.darkgrey,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "JosefinSansLight",
    color: Colors.pallete.darkgrey,
    opacity: 0.5,
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
  },
  registerBtn: {
    marginBottom: 20,
  },
  wrapperText: {
    textAlign: "center",
    marginBottom: 20,
  },
});
