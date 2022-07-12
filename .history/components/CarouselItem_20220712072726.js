import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View
      style={{ width: width - 20, height: height / 3, elevation: 5 }}
      className="flex  shadow shadow-black bg-red-100 m-5"
    >
      <Image
        style={{ width: width - 20, height: height / 3, elevation: 5 }}
        className="bg-purple-50"
      />
      <View className="absolute bottom-10 left-5">
        <Text className="text-2xl">Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
