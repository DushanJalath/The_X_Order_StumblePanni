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
  // states, validations
  const [username, setUsername] = React.useState("");
  const [usernameVerify, setUsernameVerify] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordVerify, setPasswordVerify] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const usernameValidation = (text: string) => {
    return text.length > 0;
  };
  const passwordValidation = (text: string) => {
    return text.length > 0;
  };

  // routing
  const router = useRouter();
  const handelLogin = () => {
    // console.log("Username: ", username);
    // console.log("Password: ", password);
    // console.log("Remember Me: ", rememberMe);
    // console.log("Username Verify: ", usernameVerify);
    // console.log("Password Verify: ", passwordVerify);
    // console.log("Valid Credentials: ", usernameVerify && passwordVerify);
    const validCredentials = usernameVerify && passwordVerify;
    if (validCredentials) {
      router.push("/part1");
    } else {
      alert("Invalid Credentials");
    }
  };
  const handleSignup = () => {
    router.push("/signup");
  };
  const handleForgotPassword = () => {
    router.push("/maintenance");
  };

  return (
    <ScrollView
      contentContainerStyle={[CommonStyles.container, styles.container]}
    >
      <View style={CommonStyles.centeredContent}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>
        <InputView
          type="email"
          placeholder="Email"
          onChange={setUsername}
          validationFunction={usernameValidation}
          onValidation={setUsernameVerify}
        ></InputView>
        {/* Just passing the setting fn. variable is set by the component itself */}
        <InputView
          type="pass"
          placeholder="Password"
          onChange={setPassword}
          validationFunction={passwordValidation}
          onValidation={setPasswordVerify}
        ></InputView>

        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <Checkbox
              size={18}
              text="Remember me"
              onValueChange={setRememberMe}
            ></Checkbox>
          </View>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <AccentButton onPress={handelLogin} title="Log in"></AccentButton>
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>
            Don't you have an account?
          </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.createAccountLink}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
