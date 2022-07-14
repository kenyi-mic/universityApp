import { View, Text, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const VideoPage = () => {
  return (
    <View className="flex flex-1  justify-center items-center my-5">
      <View
        style={{ width: width - 20, height: height / 3 }}
        className="bg-slate-600"
      ></View>
    </View>
  );
};

export default VideoPage;
