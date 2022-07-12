import { View, Text, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";

const { height, width } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data || data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
        />
      </View>
    );
  }
};

export default Carousel;
