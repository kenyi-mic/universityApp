import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View className={`flex flex-1 `}>
      <Image />
      <View>
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
