import { View, Text, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const VideoPage = () => {
  return (
    <View className="flex flex-1  justify-center items-center">
      <View className="h-2/5 w-11/12 bg-slate-600"></View>
    </View>
  );
};

export default VideoPage;
