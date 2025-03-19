import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@/assets/images/logo.png";
import splashImage from "@/assets/images/Onboarding-img.png";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* logo image */}
        <Image source={Logo} style={styles.logoImage} />
        <Image source={splashImage} style={styles.splashImage} />
        <Text style={styles.text}>
          Discover Endless Possibilities with{" "}
          <Text style={styles.highlightedText}>Aora</Text>
        </Text>
        <Text style={styles.captionText}>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
        <Pressable
          style={styles.button}
          //   onPress={() => console.log("Button pressed")}
        >
          <Link href="/sign-up">
            <Text style={styles.buttonText}>Continue with Email</Text>
          </Link>
        </Pressable>
        <Pressable
          style={styles.button}
          //   onPress={() => console.log("Button pressed")}
        >
          <Link href="/home">
            <Text style={styles.buttonText}>Go to home</Text>
          </Link>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 150,
    // height: 150,
    resizeMode: "contain",
  },
  splashImage: {
    width: 375,
    height: 298,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "semibold",
    textAlign: "center",
  },
  highlightedText: {
    color: "#FF8E01",
    fontWeight: "semibold",
    fontSize: 30,
    marginBottom: 20,
  },
  captionText: {
    color: "#CDCDE0",
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    width: 327,
    height: 58,
    backgroundColor: "#FF8E01",
    borderRadius: 8,
    padding: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
