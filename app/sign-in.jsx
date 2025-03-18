import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Logo from "@/assets/images/logo.png";
import { Link } from "expo-router";

const signIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.title}>Sign In</Text>
        {/* eamil */}
        <View style={styles.emailContainer}>
          <Text style={styles.usernameTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#7B7B8B"
          />
        </View>
        {/* password */}
        <View style={styles.passwordContainer}>
          <Text style={styles.usernameTitle}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            placeholderTextColor="#7B7B8B"
          />
        </View>
        {/* button  */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Text style={styles.redirectLink}>
          Don't have an account?{" "}
          <Link href="/sign-up">
            <Text style={styles.login}>Signup</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  contentContainer: {
    marginHorizontal: 24,
    marginVertical: 40,
    marginTop: 100,
  },
  logoImage: {
    width: 150,
    height: 56,
    resizeMode: "contain",
    marginBottom: 35,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "semibold",
    textAlign: "left",
    marginBottom: 20,
  },
  usernameContainer: {
    marginBottom: 20,
  },
  emailContainer: {
    marginBottom: 20,
  },
  passwordContainer: {
    marginBottom: 20,
  },
  usernameTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "left",
  },
  input: {
    backgroundColor: "#2A2A37",
    color: "#FFFFFF",
    fontSize: 16,
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FF9001",
    color: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  redirectLink: {
    color: "#CDCDE0",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  login: {
    color: "#FF9001",
    fontSize: 16,
    fontWeight: "bold",
  },
});
