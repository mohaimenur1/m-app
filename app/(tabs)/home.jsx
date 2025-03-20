import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import LogoImage from "../../assets/images/logo-small.png";
import searchIcon from "@/assets/icons/search.png";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* title text */}
      <View style={styles.titleText}>
        <View>
          <Text style={styles.greetingsText}>Welcome Back</Text>
          <Text style={styles.nameText}>jsmastery</Text>
        </View>
        <View>
          <Image source={LogoImage} style={styles.logoImg} />
        </View>
      </View>
      {/* search component */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <View style={styles.searchIconContainer}>
          <Image source={searchIcon} style={styles.searchImg} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  titleText: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 84,
    paddingHorizontal: 24,
  },
  greetingsText: {
    fontsize: 14,
    color: "white",
  },
  nameText: {
    // fontsize: 500,
    color: "white",
    fontWeight: "bold",
  },
  logoImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 84,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 60,
    // borderWidth: 1,
    padding: 10,
    color: "white",
    backgroundColor: "#232533",
    outlineColor: "transparent",
    outlineStyle: "none",
    placeholderTextColor: "#CDCDE0",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  searchImg: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    margin: 10,
  },
  searchIconContainer: {
    backgroundColor: "#232533",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
