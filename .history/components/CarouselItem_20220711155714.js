import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
console.log(width, height);
const CarouselItem = () => {
  return (
    <View className={`w-4/5 mx-auto h-1/2 bg-red-600 `}>
      <Image />
      <View>
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {},
});

export default CarouselItem;
