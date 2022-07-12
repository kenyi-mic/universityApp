import { View, Text, Image, Animated } from "react-native";
import React from "react";
import { Dimensions } from "react-native-web";

const { height, width } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View
      style={{ width: width - 20, height: height / 3 }}
      className="flex  shadow-lg shadow-black"
    >
      <Image />
      <View>
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
