import React from "react";
import { YStack, XStack, Avatar } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const BottomTabBar = () => {
  return (
    <YStack position="sticky" bottom={0}>
      <XStack
        justifyContent="space-around"
        alignItems="center"
        height={60}
        borderTopWidth={1}
        borderTopColor="#ddd"
        backgroundColor="#fff"
      >
        <Pressable style={{ justifyContent: "center", marginTop: 8 }}>
          <Ionicons name="home-outline" size={25} color="black" />
        </Pressable>
        <Pressable style={{ justifyContent: "center", marginTop: 8 }}>
          <Ionicons name="search-outline" size={25} color="black" />
        </Pressable>
        <Pressable style={{ justifyContent: "center", marginTop: 8 }}>
          <Ionicons name="add-circle-outline" size={25} color="black" />
        </Pressable>
        <Pressable style={{ justifyContent: "center", marginTop: 8 }}>
          <Ionicons name="film-outline" size={25} color="black" />
        </Pressable>
        <Pressable style={{ justifyContent: "center", marginTop: 8 }}>
          <Avatar circular size="$2">
            <Avatar.Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/72984265?s=400&u=2ce16bf50514b983405b3e9a41f0b5af638d373e&v=4",
              }}
            />
          </Avatar>
        </Pressable>
      </XStack>
    </YStack>
  );
};

export default BottomTabBar;
