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
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return;
            <CarouselItem item={item} />;
          }}
        />
      </View>
    );
  }
};

export default Carousel;
