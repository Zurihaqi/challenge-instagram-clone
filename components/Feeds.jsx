import React from "react";
import { YStack, XStack, Image, Text, Avatar, ScrollView } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

import FEEDS_DATA from "../assets/feedData";

const Feeds = () => {
  return (
    <ScrollView>
      {FEEDS_DATA.map((feedData, index) => (
        <YStack
          key={index}
          //   paddingHorizontal="$4"
          paddingTop="$2"
          paddingBottom="$4"
          borderBottomWidth={1}
          borderColor="#ddd"
        >
          {/* User Info */}
          <XStack alignItems="center" marginBottom="$3" paddingHorizontal="$4">
            <Avatar circular size="$2">
              <Avatar.Image source={{ uri: feedData.imageUrl }} />
            </Avatar>
            <Text fontWeight="bold" marginLeft="$2">
              {feedData.username}
            </Text>
          </XStack>

          {/* Feed Image */}
          <Image
            source={{ uri: feedData.feed.imageUrl }}
            width="100%"
            height={300}
          />

          {/* Actions */}
          <XStack
            justifyContent="space-between"
            marginTop="$3"
            marginBottom="$2"
            paddingHorizontal="$4"
          >
            <XStack gap="$4">
              <Ionicons name="heart-outline" size={25} color="black" />
              <Ionicons name="chatbubble-outline" size={25} color="black" style={{transform: 'rotate(270deg)'}}/>
              <Ionicons name="paper-plane-outline" size={25} color="black" />
            </XStack>
            <Ionicons name="bookmark-outline" size={25} color="black" />
          </XStack>

          {/* Likes */}
          <Text fontWeight="bold" marginBottom="$1" paddingHorizontal="$4">
            {feedData.feed.totalLikes} likes
          </Text>

          {/* Caption */}
          <Text paddingHorizontal="$4">
            <Text fontWeight="bold">{feedData.username} </Text>
            {feedData.feed.caption}
          </Text>

          {/* Comments */}
          <Text color="#888" marginTop="$2" paddingHorizontal="$4">
            View all {feedData.feed.totalComments} comments
          </Text>

          {/* Post Date */}
          <Text
            color="#888"
            fontSize="$1"
            marginTop="$2"
            paddingHorizontal="$4"
          >
            {new Date(feedData.feed.postDate).toDateString()}
          </Text>
        </YStack>
      ))}
    </ScrollView>
  );
};

export default Feeds;
