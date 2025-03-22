import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const CreatePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Upload Video</Text>

        {/* Video Title Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Video Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Give your video a catchy title..."
            placeholderTextColor="#999"
          />
        </View>

        {/* Upload Video Section */}
        <View style={styles.uploadSection}>
          <Ionicons name="cloud-upload" size={40} color="#FFA001" />
          <Text style={styles.uploadText}>Upload Video</Text>
        </View>

        {/* Thumbnail Image Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Thumbnail Image</Text>
          <TouchableOpacity style={styles.thumbnailButton}>
            <Text style={styles.thumbnailButtonText}>Choose a file</Text>
          </TouchableOpacity>
        </View>

        {/* AI Prompt Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>AI Prompt</Text>
          <TextInput
            style={styles.input}
            placeholder="The AI prompt of your video..."
            placeholderTextColor="#999"
            multiline
          />
        </View>

        {/* Submit & Publish Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit & Publish</Text>
        </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#232533",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    fontSize: 14,
  },
  uploadSection: {
    borderWidth: 2,
    borderColor: "#FFA001",
    borderStyle: "dashed", // Dashed border for upload section
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  uploadText: {
    color: "#FFA001",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  thumbnailButton: {
    backgroundColor: "#232533",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  thumbnailButtonText: {
    color: "#FFA001",
    fontSize: 16,
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#FFA001",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#161622",
    fontSize: 16,
    fontWeight: "bold",
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

export default CreatePage;
