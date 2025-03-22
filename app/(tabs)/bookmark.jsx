import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

// Import local images
import saveImg1 from "../../assets/images/saveImg1.png";
import saveImg2 from "../../assets/images/saveImg2.png";
import userProf from "../../assets/images/userPro.png";
const SavedPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Saved Videos</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search your saved videos"
            placeholderTextColor="#999"
          />
          <Ionicons
            name="search"
            size={24}
            color="#999"
            style={styles.searchIcon}
          />
        </View>

        {/* Saved Videos List */}
        <View style={styles.videoList}>
          {/* Video 1 */}
          <View style={styles.videoCard}>
            <Image source={saveImg1} style={styles.videoThumbnail} />
            <View style={styles.videoDetails}>
              <Text style={styles.videoTitle}>
                The camera follows behind a whi...
              </Text>
              <View style={styles.creatorContainer}>
                <Image source={userProf} style={styles.userProfileImage} />
                <Text style={styles.videoCreator}>Johnson</Text>
              </View>
            </View>
          </View>

          {/* Video 2 */}
          <View style={styles.videoCard}>
            <Image source={saveImg2} style={styles.videoThumbnail} />
            <View style={styles.videoDetails}>
              <Text style={styles.videoTitle}>
                Close up on cartoon character b...
              </Text>
              <View style={styles.creatorContainer}>
                <Image source={userProf} style={styles.userProfileImage} />
                <Text style={styles.videoCreator}>Christopher</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Navigation */}
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232533",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#fff",
  },
  searchIcon: {
    marginLeft: 10,
  },
  videoList: {
    marginBottom: 20,
  },
  videoCard: {
    backgroundColor: "#232533",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  videoThumbnail: {
    width: "100%",
    height: 150,
  },
  videoDetails: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  creatorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userProfileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  videoCreator: {
    fontSize: 14,
    color: "#888",
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
    color: "#fff",
  },
});

export default SavedPage;
