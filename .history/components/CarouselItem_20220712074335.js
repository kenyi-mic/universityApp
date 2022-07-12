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
        style={{ width: width - 20, height: height / 3 }}
        className="bg-purple-50 bg-contain saturate-20"
        source={{
          uri:
            "https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <View className="absolute bottom-10 left-5">
        <Text className="text-2xl font-bold mb-2 text-slate-400 shadow-xl shadow-black">
          Title
        </Text>
        <Text className="text-lg text-500 text-slate-400">Description</Text>
      </View>
    </View>
  );
};

export default CarouselItem;
