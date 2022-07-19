import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("screen");

const VideoPage = () => {
  return (
    <View className="flex flex-1  justify-center items-center">
      <View
        style={{ width: width - 20, height: height / 4 }}
        className="justify-center bg-slate-900"
      >
        <Text className="text-center  pt-10 text-lg text-white">
          Coming soon
        </Text>
      </View>
    </View>
  );
};

export default VideoPage;
