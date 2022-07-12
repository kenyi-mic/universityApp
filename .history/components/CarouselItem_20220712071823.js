import { View, Text, Image, Animated } from "react-native";
import React from "react";
import { Dimensions } from "react-native-web";

const { height, width } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View
      style={{ width: width - 20, height: height / 3, elevation: 5 }}
      className="flex  shadow shadow-black bg-red-100"
    >
      <Image />
      <View className="absolute left-5 bottom-10 m-10">
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
