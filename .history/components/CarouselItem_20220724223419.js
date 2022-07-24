import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const CarouselItem = ({ data }) => {
  const truncate = (string, n) => {
    return string?.lenght > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <View
      style={{ width: width - 20, height: height / 3, elevation: 5 }}
      className="flex shadow shadow-black bg-red-100 m-2.5"
    >
      <Image
        style={{ width: width - 20, height: height / 3 }}
        className="brightness-50 bg-purple-200/75  outline-black opacity-70 bg-contain "
        source={require(data?.image)}
      />
      <View className="absolute bottom-10 left-5 w-5/6">
        <Text
          className="text-lg font-bold mb-2 text-white shadow-xl shadow-black"
          numberOfLines={2}
        >
          {truncate(data?.title, 10)}
        </Text>
        <Text className="text-sm text-500 text-blue-50" numberOfLines={3}>
          {truncate(data?.description, 20)}
        </Text>
      </View>
    </View>
  );
};

export default CarouselItem;
