import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

import AccentButton from "@/components/AccentButton";
import InputView from "@/components/InputView";
import Checkbox from "@/components/Checkbox";
import { Colors } from "@/constants/Colors";
import { CommonStyles } from "@/constants/CommonStyles";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const handelLogin = () => {
    const validCredentials = true;
    if(validCredentials) {
      router.push("/(onboarding)");
    }
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.centeredContent}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>

        <InputView type="email" placeholder="Email"></InputView>
        <InputView type="pass" placeholder="Password"></InputView>

        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <Checkbox
              size={18}
              text="Remember me"
              onValueChange={() => ({})}
            ></Checkbox>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <AccentButton onPress={handelLogin} title="Log in"></AccentButton>

        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>
            Don't you have an account?
          </Text>
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.createAccountLink}>Create Account</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContent: {
    width: "100%",
    maxWidth: 800,
  },
  createAccountContainer: {
    marginTop: 20,
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
});
