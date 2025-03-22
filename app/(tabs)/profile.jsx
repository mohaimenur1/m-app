import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // For icons
import profileImage from "../../assets/images/avatar.png";
import profileContentImg1 from "../../assets/images/profileContentImg1.png";
import profileContentImg2 from "../../assets/images/profileContentImg2.png";

// Sample data for the posts/videos
const posts = [
  {
    id: "1",
    title: "Businessman Work with Laptop...",
    creator: "jsmastery",
    thumbnail: profileContentImg1, // Replace with actual image URL
  },
  {
    id: "2",
    title: "Bull trading with computer Bullis...",
    creator: "jsmastery",
    thumbnail: profileContentImg2, // Replace with actual image URL
  },
];

const ProfilePage = () => {
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={profileImage} // Replace with actual logo URL
          style={styles.logo}
        />
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postCreator}>{item.creator}</Text>
        <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
      </View>
      <View style={styles.thumbnailContainer}>
        <Image source={item.thumbnail} style={styles.thumbnail} />
        {/* <Ionicons
          name="play-circle"
          size={40}
          color="#fff"
          style={styles.playIcon}
        /> */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Logo and Exit Icon */}
      <View style={styles.header}>
        <Image
          source={profileImage} // Replace with actual logo URL
          style={styles.headerLogo}
        />
        {/* <Ionicons name="close" size={30} color="#ff0000" /> */}
      </View>

      {/* User Info */}
      <Text style={styles.username}>jsmastery</Text>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>10</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1.2K</Text>
          <Text style={styles.statLabel}>Views</Text>
        </View>
      </View>

      {/* Posts List */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postList}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  statItem: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  statValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#888",
    fontSize: 14,
  },
  postList: {
    marginTop: 10,
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  postTitle: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  postCreator: {
    color: "#888",
    fontSize: 14,
    marginRight: 10,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
    opacity: 0.8,
  },
});

export default ProfilePage;
