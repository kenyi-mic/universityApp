import { View, Text, Image, Animated } from "react-native";
import React from "react";
import { Dimensions } from "react-native-web";

const { height, width } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Image />
      <View className="absolute left-5 bottom-10 m-10">
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
