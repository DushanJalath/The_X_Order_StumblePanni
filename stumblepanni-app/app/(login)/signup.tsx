import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import AccentButton from "@/components/AccentButton";
import InputView from "@/components/InputView";
import DropdownView from "@/components/DropdownView";
import { Colors } from "@/constants/Colors";
import { Data } from "@/constants/Data";
import { CommonStyles } from "@/constants/CommonStyles";

const signup = () => {
  // states and validations
  const [username, setUsername] = useState("");
  const [usernameVerify, setUsernameVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneVerify, setPhoneVerify] = useState(false);
  const [country, setCountry] = useState("");
  const [countryVerify, setCountryVerify] = useState(false);

  const usernameValidation = (text: string) => {
    return text.length > 5;
  };
  const passwordValidation = (text: string) => {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(text);
  };
  const emailValidation = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };
  const phoneValidation = (text: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };
  const countryValidation = (text: string) => {
    return text.length > 0;
  };

  // routing
  const router = useRouter();
  const handleRegister = () => {
    const validDetails =
      usernameVerify &&
      passwordVerify &&
      emailVerify &&
      phoneVerify &&
      countryVerify;
    // console.log("Valid country: ", countryVerify);
    // console.log("Country: ", country);
    if (validDetails) {
      router.push("/");
    } else {
      alert("Please fill all fields correctly");
    }
  };
  const handleTermsAndConditions = () => {
    router.push("/maintenance");
  };
  const handlePrivacyPolicy = () => {
    router.push("/maintenance");
  };
  const handleLogin = () => {
    router.push("/");
  };

  return (
    <ScrollView
      contentContainerStyle={[CommonStyles.container, styles.container]}
    >
      <View style={CommonStyles.centeredContent}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create your new account</Text>

        <InputView
          type="default"
          placeholder="Name"
          onChange={setUsername}
          validationFunction={usernameValidation}
          onValidation={setUsernameVerify}
        ></InputView>
        <InputView
          type="email"
          placeholder="Email"
          onChange={setPassword}
          validationFunction={emailValidation}
          onValidation={setEmailVerify}
        ></InputView>
        <InputView
          type="phone"
          placeholder="Phone"
          onChange={setPhone}
          validationFunction={phoneValidation}
          onValidation={setPhoneVerify}
        ></InputView>
        <InputView
          type="pass"
          placeholder="Password"
          onChange={setPassword}
          validationFunction={passwordValidation}
          onValidation={setPasswordVerify}
        ></InputView>
        <DropdownView
          placeholder="Select Country"
          items={Data.countries}
          onChange={setCountry}
          validationFunction={countryValidation}
          onValidation={setCountryVerify}
        />

        <View style={styles.createAccountContainer}>
          <Text style={styles.wrapperText}>
            <Text style={styles.createAccountText}>
              By signing up you agree to our {}
            </Text>
            <TouchableOpacity onPress={handleTermsAndConditions}>
              <Text style={styles.createAccountLink}>
                Terms & Conditions {}
              </Text>
            </TouchableOpacity>
            <Text style={styles.createAccountText}>and {}</Text>
            <TouchableOpacity onPress={handlePrivacyPolicy}>
              <Text style={styles.createAccountLink}>Privacy Policy</Text>
            </TouchableOpacity>
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
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.createAccountLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
