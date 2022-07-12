import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const CarouselItem = ({ data }) => {
  return (
    <View
      style={{ width: width - 20, height: height / 3, elevation: 5 }}
      className="flex  shadow shadow-black bg-red-100 m-5"
    >
      <Image
        style={{ width: width - 20, height: height / 3 }}
        className="backdrop-sepia-0 bg-purple-200/75 bg-contain "
        source={{
          uri: data.image,
        }}
      />
      <View className="absolute bottom-10 left-5">
        <Text className="text-2xl font-bold mb-2 text-white shadow-xl shadow-black">
          {data.title}
        </Text>
        <Text className="text-lg text-500 text-white">{data.description}</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
