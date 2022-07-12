import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import VideoPlayer from "react-native-video-player";

const data = [
  {
    title: "Ugv presentation video",
    link: "../assets/ugvVid",
    thumbnail:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const { height, width } = Dimensions.get("window");

const VideoPage = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => {
          return (
            <ScrollView>
              <View style={styles.card}>
                <VideoPlayer
                  video={{ uri: item.link }}
                  autoplay={false}
                  defaultMuted={true}
                  videoWidth={width - 20}
                  videoHeight={height / 3}
                  thumbnail={item.thumbnail}
                />
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 20,
    height: height / 3,
  },
});
export default VideoPage;
