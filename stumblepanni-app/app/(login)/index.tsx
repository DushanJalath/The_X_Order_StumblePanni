import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const index = () => {
  const [hidePass, setHidePass] = useState(true);
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Log in to your account</Text>

      <View style={styles.inputContainer}>
        {/* <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} /> */}
        <TextInput
          placeholder="JohnDoe@example.com"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} /> */}
        <TextInput
          placeholder="*******"
          style={styles.input}
          secureTextEntry={hidePass}
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
          <Ionicons
            name={hidePass ? "eye-off-outline" : "eye-outline"}
            size={26}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
          {/* <RoundCheckbox
            size={24}
            checked={this.state.isSelected}
            onValueChange={(newValue) => {
              console.log(newValue);
            }}
          /> */}
          <Text style={styles.label}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  createAccountContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  createAccountText: {
    color: "gray",
  },
  createAccountLink: {
    color: "#4ECCA3",
    fontWeight: "bold",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#4ECCA3",
  },
  label: {
    fontSize: 14,
    color: "gray",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
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

  loginButton: {
    backgroundColor: "#4ECCA3",
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  orText: {
    textAlign: "center",
    marginBottom: 20,
    color: "gray",
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
