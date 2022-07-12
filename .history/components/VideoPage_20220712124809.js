import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const VideoPage = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => {
          return <ScrollView></ScrollView>;
        }}
      />
    </View>
  );
};

export default VideoPage;
