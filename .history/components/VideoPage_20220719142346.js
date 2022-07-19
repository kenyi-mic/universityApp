import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("screen");

const VideoPage = () => {
  return (
    <View className="flex flex-1  justify-center items-center">
      <View
        style={{ width: width - 20, height: height / 4 }}
        className="bg-slate-800"
      >
        <Text className="text-center text-2xl  pt-10 font-light text-white top-14">
          Coming soon
        </Text>
      </View>
    </View>
  );
};

export default VideoPage;
