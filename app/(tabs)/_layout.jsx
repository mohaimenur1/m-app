import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, Text, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import icons from "@/constants/icons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 25, height: 25 }}
      />
      <Text
        style={{
          color: color,
          fontSize: 10,
          fontWeight: focused ? "bold" : "normal",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          // marginButton: 10,
          // height: 0,
          // paddingVertical: 20,
          // paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Save"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
