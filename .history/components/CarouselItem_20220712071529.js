import { View, Text, Image, Animated } from "react-native";
import React from "react";
import { Dimensions } from "react-native-web";

const { height, width } = Dimensions.get("window");
const scrollX = Animated.divide(width);

const CarouselItem = () => {
  return (
    <View className="flex flex-1 shadow-lg shadow-black h-">
      <Image />
      <View>
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
