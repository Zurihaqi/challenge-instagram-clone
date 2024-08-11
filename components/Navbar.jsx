import React from "react";
import { YStack, XStack, Text, Image, Button, Separator } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Navbar = () => {
  return (
    <YStack position="sticky">
      <XStack
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="$4"
        height={60}
        borderBottomWidth={1}
        borderBottomColor="#ddd"
        backgroundColor="#fff"
      >
        <XStack gap="$2">
          <Image
            source={require("../assets/images/logo.png")}
            width={100}
            height={40}
          />
          <Pressable style={{ justifyContent: "center", marginTop: 8 }}>
            <Ionicons name="chevron-down-outline" size={15} color="black" />
          </Pressable>
        </XStack>
        <XStack gap="$4">
          <Pressable>
            <Ionicons name="heart-outline" size={24} color="black" />
          </Pressable>
          <Pressable>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="black"
            />
          </Pressable>
        </XStack>
      </XStack>
      <Separator />
    </YStack>
  );
};

export default Navbar;
