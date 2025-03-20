import LogoImage from "../../assets/images/logo-small.png";
import List1 from "../../assets/images/list1.png";
import List2 from "../../assets/images/list2.png";
import searchIcon from "@/assets/icons/search.png";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.usernameText}>jsmastery</Text>
          </View>
          <View>
            <Image
              source={LogoImage} // Replace with your image path
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a video topic"
            placeholderTextColor="#999"
          />
          <Ionicons
            name="search"
            size={24}
            color="#999"
            style={styles.searchIcon}
          />
        </View>

        {/* Trending Videos Section */}
        <Text style={styles.sectionTitle}>Trending Videos</Text>

        {/* Video Card 1 */}
        <View style={styles.videoCard}>
          <Image
            source={List1} // Replace with your image path
            style={styles.videoImage}
          />
          <Text style={styles.videoTitle}>Woman walks down a Tokyo...</Text>
          <Text style={styles.videoAuthor}>Brandon Etter</Text>
        </View>

        {/* Video Card 2 */}
        <View style={styles.videoCard}>
          <Image
            source={List2} // Replace with your image path
            style={styles.videoImage}
          />
          <Text style={styles.videoTitle}>Woman walks down a Tokyo...</Text>
          <Text style={styles.videoAuthor}>Brandon Etter</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  usernameText: {
    fontSize: 18,
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#232533",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#232533",
  },
  searchIcon: {
    marginLeft: 10,
    backgroundColor: "#232533",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CDCDE0",
    marginBottom: 10,
  },
  videoCard: {
    marginBottom: 20,
  },
  videoImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 8,
  },
  videoAuthor: {
    fontSize: 14,
    color: "#CDCDE0",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    marginTop: 20,
  },
  navItem: {
    fontSize: 16,
    color: "#000",
  },
});

export default HomeScreen;
