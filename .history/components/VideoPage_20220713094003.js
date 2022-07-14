import { View, Text, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const VideoPage = () => {
  return (
    <View className="h-40 w-5/6 bg-red">
      <View
        style={{ height: height / 3, width: width - 20, background: "gray" }}
      ></View>
    </View>
  );
};

export default VideoPage;
