import React from "react";
import { YStack, XStack, Avatar, Text, ScrollView, View, Image } from "tamagui";
import { LinearGradient } from "expo-linear-gradient";
import FEEDS_DATA from "../assets/feedData";

const StoryItem = ({ imageUri, name }) => (
  <YStack alignItems="center">
    <LinearGradient
      colors={['#405DE6', '#5B51D8', '#833AB4', '#C13584', '#E1306C', '#FD1D1D', '#F56040', '#777737', '#FCAF45', '#FFDC80']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{
        borderRadius: 50,
        padding: 2.5,
      }}
    >
      <Image source={{uri: imageUri, width: 60, height: 60}} style={{borderRadius: 50}} />
    </LinearGradient>
    <Text mt="$2" textAlign="center" size="$2">
      {name}
    </Text>
  </YStack>
);

const Stories = () => {
  const stories = FEEDS_DATA.filter((feed) => feed.hasActiveStory).map(
    (feed) => ({
      id: feed.username,
      imageUri: feed.imageUrl,
      name: feed.username,
    })
  );

  return (
    <View paddingTop="$2">
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <XStack
          alignItems="center"
          paddingHorizontal="$4"
          marginTop="$2"
          gap="$4"
        >
          <YStack alignItems="center">
            <Avatar circular size="$6">
              <Avatar.Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/72984265?s=400&u=2ce16bf50514b983405b3e9a41f0b5af638d373e&v=4",
                }}
              />
            </Avatar>
            <Text mt="$2" textAlign="center" size="$2">
              Your story
            </Text>
          </YStack>
          {stories.length > 0 ? (
            stories.map((story) => (
              <StoryItem
                key={story.id}
                imageUri={story.imageUri}
                name={story.name}
              />
            ))
          ) : (
            <XStack alignItems="center" marginHorizontal="$4" gap="$4">
              <YStack alignItems="center">
                <Avatar circular size="$6">
                  <Avatar.Image
                    source={{
                      uri: "https://avatars.githubusercontent.com/u/72984265?s=400&u=2ce16bf50514b983405b3e9a41f0b5af638d373e&v=4",
                    }}
                  />
                </Avatar>
                <Text mt="$2" textAlign="center" size="$2">
                  Your story
                </Text>
              </YStack>
            </XStack>
          )}
        </XStack>
      </ScrollView>
    </View>
  );
};

export default Stories;
