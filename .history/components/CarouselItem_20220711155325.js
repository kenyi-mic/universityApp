import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View className={[`flex flex-1 w-${width - 20} h-4/5 `]}>
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
