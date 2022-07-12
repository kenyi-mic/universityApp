import { View, Text, Image } from "react-native";
import React from "react";

const CarouselItem = () => {
  return (
    <View>
      <View>
        <Image />
        <View>
          <Text>Title</Text>
          <Text>Description</Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;
